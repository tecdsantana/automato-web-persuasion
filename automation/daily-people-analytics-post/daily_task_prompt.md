# Pipeline diário — People Analytics / Estratégia de Dados (agente na nuvem)

Você vai gerar e publicar automaticamente 1 post no blog da flownine (tabela `blog_posts` no Supabase), seguindo estes passos. Esta rotina roda **2x ao dia** — cada execução deve ser tratada como independente e precisa gerar um post com ângulo/assunto **diferente** da execução anterior (ver seção "Evitar duplicação" abaixo).

Este prompt roda em um agente na nuvem, num checkout deste repositório (`tecdsantana/flownine`). As credenciais (Supabase, Unsplash) vêm de variáveis de ambiente do próprio agente/rotina — não de um arquivo `.env` local. Se alguma variável obrigatória estiver ausente, o passo relacionado deve ser pulado (ver seção 4) ou a execução deve parar com um erro claro (ver seção 5).

## 1. Buscar conteúdo

**A busca é global, não se limite a fontes brasileiras ou em português.** Use busca na web em inglês (e, se fizer sentido, em outros idiomas) para varrer o cenário mundial — EUA, Europa, Ásia, qualquer país — e encontrar 1 a 3 notícias, artigos ou estudos **recentes (últimas 24–72h, ou o mais recente disponível)** sobre um dos seguintes temas:
- People Analytics
- Análise de dados aplicada a negócios/RH
- Estratégia de dados (data strategy)
- Automação de dados / data ops
- Cultura data-driven, governança de dados, IA aplicada a dados de pessoas

Priorize fontes relevantes e de autoridade (HBR, McKinsey, Gartner, MIT Sloan, LinkedIn/SHRM research, HR.com, Deloitte, veículos de negócios internacionais, papers/estudos de instituições reconhecidas). Escolha o achado **mais relevante do mundo todo no momento** — de preferência com dados/números concretos e nomeáveis (nome do estudo, instituição, ano, percentual) — e não necessariamente o mais fácil de achar em português.

**Fallback (decisão já validada com o usuário):** se, após uma busca razoável, não houver nenhuma notícia/estudo suficientemente fresco ou relevante sobre os temas acima (People Analytics / dados de RH), amplie a busca para:
- Automação de processos usando IA (RPA + IA, agentes de IA em operações/negócios)
- Estratégia de dados de forma mais ampla (fora do contexto de RH — arquitetura de dados, IA aplicada a operações, data ops corporativo)

Só pule a execução (ver seção "Observações") se mesmo essa busca ampliada não retornar nada relevante e recente.

## 2. Escolher o ângulo de busca comercial

Além da notícia em si, cada post precisa mirar UMA pergunta de busca comercial real — a notícia é o gancho, mas o artigo deve responder a uma dúvida que alguém pesquisaria no Google antes de contratar uma consultoria como a FlowNine. Escolha um tema da lista abaixo que faça sentido com a notícia encontrada (a conexão pode ser indireta):

- quanto custa uma consultoria de dados
- vale a pena contratar consultoria de dados e IA
- como escolher uma consultoria de dados
- contratar people analytics: o que avaliar
- o que faz uma consultoria de people analytics
- como implementar governança de dados
- por onde começar a estruturar dados na empresa
- terceirizar analytics vale a pena
- como montar um time de dados
- quanto custa implementar BI corporativo
- ROI de people analytics: como medir
- como montar um dashboard de RH
- diferença entre BI e IA aplicada a negócio
- como auditar a maturidade de dados de uma empresa
- consultoria de dados para RH: como funciona

Antes de escolher, confira os `tags` dos últimos posts (seção "Evitar duplicação") e evite repetir o mesmo tema-alvo usado nas últimas 3–4 execuções — percorra toda a lista antes de repetir um item.

Como aplicar o tema-alvo, sem virar propaganda:
- Inclua o tema-alvo (ou uma variação natural dele) como uma das `tags`.
- Dedique pelo menos uma seção do `content` a responder essa pergunta na prática — conteúdo real de valor, não um CTA disfarçado (ex.: se o tema for "quanto custa uma consultoria de dados", explique os fatores reais que influenciam o preço, sem inventar números da FlowNine).
- Incorpore o tema-alvo ao `title` quando ficar natural; quando não couber bem, é aceitável que ele apareça só na seção dedicada e nas tags — não force um título artificial.

## 3. Escrever o post — regras de SEO e originalidade

O objetivo é conteúdo que o Google trate como **útil e original** (critério real de ranqueamento — E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness), não um texto genérico que pareça produzido em massa. Isso protege o site tanto de penalização por "conteúdo raso" quanto de parecer copy robotizado para quem lê. Regras:

- **Nunca copie/parafraseie de perto uma única fonte.** Combine 2–3 fontes quando possível e escreva uma síntese com ponto de vista próprio — não um resumo do artigo original.
- **Tradução ≠ cópia.** Como a fonte normalmente estará em inglês (ou outro idioma), não traduza literalmente frase a frase. Leia o conteúdo, entenda o achado, e **reescreva do zero em português do Brasil** como uma análise própria, com exemplos e contextualização que façam sentido para o leitor brasileiro — isso é o que garante originalidade real (e é o que o Google e leitores humanos percebem como conteúdo de qualidade, não tradução automática).
- **Dados concretos, sempre nomeados**: cite o nome do estudo/pesquisa, a instituição, o ano/mês e o número exato. Evite generalizações vagas ("estudos mostram que...").
- **Varie a estrutura entre posts.** Não repita sempre o mesmo esqueleto (intro + 3 subtítulos + lista + CTA). Alterne: às vezes comece com uma pergunta, às vezes com um dado chocante, às vezes com uma mini-história/caso. Varie o número de subtítulos (2 a 4), varie entre usar listas ou não.
- **Evite jargão de "IA genérica"**: não empilhe buzzwords (ex: não force "transformação digital", "ROI de IA", "automação de processos" em todo parágrafo só por padrão). Use um termo só quando ele for realmente o ponto central daquele trecho.
- **Varie o padrão de título.** Nem todo título precisa ter emoji ou seguir "Tema: Gancho 🚀". Alterne entre afirmativo, pergunta, número no título, sem emoji, etc.
- **excerpt como meta description real**: 140–160 caracteres, sem clickbait vazio, deixando claro o valor concreto do post (isso é o que aparece no Google e nas redes).
- **tags como palavras-chave de SEO**: misture termos amplos (ex: "People Analytics") com termos de cauda longa mais específicos (ex: "confiança em dados de RH 2026") que reflitam como alguém pesquisaria esse assunto no Google.
- **content**: markdown com `###`, **negrito** em termos-chave (com moderação — negrito em excesso também é sinal de baixa qualidade), 300–500 palavras. Termine com uma linha de CTA (pode variar o texto do link, não precisa ser sempre idêntico):
  `[Fale com um de nossos especialistas hoje!](https://www.flownine.com.br/#contato)`
  E cite a(s) fonte(s) original(is) no fim do texto (ex: "**Fontes**: [veículo/autor/estudo]").
- **category:** rótulo curto e específico do tema do dia — varie conforme o assunto, não use sempre o mesmo valor.
- **published:** `true` (publicação direta, sem revisão humana — decisão já validada com o usuário).
- **Idioma:** português do Brasil.

## 4. Buscar imagem de capa (Unsplash)

A chave da API Unsplash vem da variável de ambiente `UNSPLASH_ACCESS_KEY`. **Se essa variável estiver vazia/ausente, pule esta seção inteira e publique com `cover_image: null`** — não tente adivinhar ou usar outra URL de imagem. Use a API oficial (não faça scraping do site):

```
curl -s "https://api.unsplash.com/search/photos?query=<TERMO_EM_INGLES>&orientation=landscape&per_page=5" \
  -H "Authorization: Client-ID <UNSPLASH_ACCESS_KEY>"
```

- Traduza o tema do post para um termo de busca em **inglês** genérico e visual (ex: "business meeting data", "team analytics office", "hr technology"), já que a base do Unsplash é majoritariamente indexada em inglês.
- Escolha uma foto real, profissional, com pessoas/ambiente corporativo condizente com o assunto (evite fotos abstratas demais ou genéricas de "robozinho de IA" — o pedido explícito é por imagens reais que transmitam confiança).
- Não repita uma foto (mesmo `id`/URL) já usada em um post recente — confira contra a lista obtida na seção "Evitar duplicação".
- Use a URL do campo `urls.regular` (ou `urls.full`) da foto escolhida como `cover_image`.
- Boa prática da API Unsplash: ao decidir usar uma foto, dispare (sem bloquear a publicação se falhar) um GET em `links.download_location` da foto escolhida, com o mesmo header `Authorization`, para registrar o uso conforme as diretrizes da plataforma.
- Se a busca em inglês não retornar nada relevante, tente um termo mais genérico (ex: "office team", "business data") antes de desistir da imagem.
- Se mesmo assim não achar nada adequado, publique com `cover_image: null` em vez de usar uma imagem sem relação com o assunto.

## 5. Publicar
1. Salve o JSON do post em um arquivo temporário no workspace do agente, com as chaves: `title`, `excerpt`, `content`, `category`, `tags`, `cover_image` (URL do Unsplash ou `null`).
2. Rode, a partir da raiz do repositório:
   ```
   pip install -q requests
   python automation/daily-people-analytics-post/insert_post.py <arquivo.json>
   ```
   (sem `--draft`, para publicar direto — `published` já vem `true` do JSON). As credenciais Supabase devem estar disponíveis como variáveis de ambiente (`SUPABASE_URL`, `SUPABASE_TABLE`, `SUPABASE_SERVICE_ROLE_KEY`); se alguma estiver ausente, o script falha com uma mensagem clara — não tente adivinhar valores nem prosseguir sem publicar.
3. Confirme que o script retornou o post inserido (JSON de resposta com `id` preenchido).

## 6. Reportar
Ao final, envie uma mensagem curta confirmando: título do post publicado, categoria, tema-alvo de busca comercial escolhido (seção 2), fonte usada, e se conseguiu incluir imagem de capa (e de onde).

## Evitar duplicação (importante para SEO — conteúdo duplicado/repetitivo é penalizado)
Antes de escrever, consulte os últimos posts publicados para não repetir tema, ângulo, tema-alvo de busca, título ou imagem:
```
GET https://vsbbuvvouvnyibengsni.supabase.co/rest/v1/blog_posts?select=title,category,tags,cover_image,published_at&order=published_at.desc&limit=10
Header: apikey: <SUPABASE_ANON_KEY ou SUPABASE_SERVICE_ROLE_KEY>
```
Se a execução atual for a segunda do mesmo dia, garanta que o assunto e o ângulo sejam claramente diferentes do post já publicado horas antes (ex: uma execução sobre People Analytics/RH, outra sobre estratégia/governança de dados).

## Observações
- Nunca exponha valores de chaves/segredos (Supabase, Unsplash) em mensagens, logs ou commits.
- Se a busca não retornar nada relevante e recente, é preferível **pular a execução** (não publicar) a publicar um post genérico, repetitivo ou de baixa qualidade.
