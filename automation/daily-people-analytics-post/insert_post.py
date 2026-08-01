"""
Insere um post na tabela blog_posts do Supabase (projeto flownine).

Uso:
    python insert_post.py post.json
    python insert_post.py post.json --draft   (forca published=false, para testes)

Credenciais sao lidas de variaveis de ambiente (SUPABASE_URL, SUPABASE_TABLE,
SUPABASE_SERVICE_ROLE_KEY). Se um arquivo .env existir ao lado deste script
(uso local), ele e usado como fallback para variaveis que nao estejam no
ambiente -- isso permite rodar tanto localmente quanto num agente na nuvem
(onde as credenciais vem do Environment/segredos, nao de um arquivo).

O JSON de entrada deve conter:
    title (str, obrigatorio)
    excerpt (str, obrigatorio)
    content (str, obrigatorio, markdown)
    category (str, obrigatorio)
    tags (list[str], obrigatorio)
    cover_image (str ou null, opcional)
    published (bool, opcional, default True)

id, slug, published_at, created_at, updated_at sao gerados automaticamente.
"""
import json
import os
import re
import sys
import time
import unicodedata
from pathlib import Path

import requests

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8")

ENV_PATH = Path(__file__).resolve().parent / ".env"
REQUIRED_ENV = ["SUPABASE_URL", "SUPABASE_TABLE", "SUPABASE_SERVICE_ROLE_KEY"]


def load_env() -> dict:
    env = {key: os.environ[key] for key in REQUIRED_ENV if os.environ.get(key)}

    if ENV_PATH.exists():
        for line in ENV_PATH.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            env.setdefault(key.strip(), value.strip())

    missing = [k for k in REQUIRED_ENV if not env.get(k)]
    if missing:
        raise RuntimeError(
            f"Variaveis de ambiente ausentes: {', '.join(missing)} "
            "(defina no ambiente do agente, ou em um .env local ao lado deste script)"
        )
    return env


def slugify(title: str) -> str:
    normalized = unicodedata.normalize("NFKD", title).encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^a-zA-Z0-9]+", "-", normalized).strip("-").lower()
    return f"{slug}-{int(time.time() * 1000)}"


def build_payload(data: dict, force_draft: bool) -> dict:
    required = ["title", "excerpt", "content", "category", "tags"]
    missing = [f for f in required if f not in data or data[f] in (None, "")]
    if missing:
        raise ValueError(f"Campos obrigatorios ausentes: {', '.join(missing)}")

    return {
        "title": data["title"],
        "slug": data.get("slug") or slugify(data["title"]),
        "excerpt": data["excerpt"],
        "content": data["content"],
        "cover_image": data.get("cover_image"),
        "category": data["category"],
        "tags": data["tags"],
        "published": False if force_draft else bool(data.get("published", True)),
        "published_at": None if force_draft else data.get("published_at") or _now_iso(),
    }


def _now_iso() -> str:
    import datetime

    return datetime.datetime.now(datetime.timezone.utc).isoformat()


def insert(payload: dict, env: dict) -> dict:
    url = f"{env['SUPABASE_URL']}/rest/v1/{env['SUPABASE_TABLE']}"
    headers = {
        "apikey": env["SUPABASE_SERVICE_ROLE_KEY"],
        "Authorization": f"Bearer {env['SUPABASE_SERVICE_ROLE_KEY']}",
        "Content-Type": "application/json",
        "Prefer": "return=representation",
    }
    resp = requests.post(url, headers=headers, json=payload, timeout=30)
    resp.raise_for_status()
    return resp.json()


def main():
    if len(sys.argv) < 2:
        print("Uso: python insert_post.py <arquivo.json> [--draft]", file=sys.stderr)
        sys.exit(1)

    json_path = Path(sys.argv[1])
    force_draft = "--draft" in sys.argv[2:]

    data = json.loads(json_path.read_text(encoding="utf-8"))
    env = load_env()

    payload = build_payload(data, force_draft)
    result = insert(payload, env)

    print(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
