import React from 'react';
import { Database, LayoutDashboard, Users, Brain, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const services = [
  {
    icon: Database,
    title: 'Governança & Arquitetura de Dados',
    description:
      'Estruturamos a fundação de dados que sua empresa precisa para decisões confiáveis em escala — arquitetura moderna, governança robusta e dados prontos para uso.',
    bullets: [
      'Arquitetura de dados escalável',
      'Governança e qualidade de dados',
      'Integrações e pipelines de dados',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'BI & Analytics Engineering',
    description:
      'Substituímos planilhas manuais por dashboards em tempo real, dando visibilidade instantânea para decisões de negócio.',
    bullets: [
      'Dashboards em tempo real (Power BI, QuickSight, Grafana)',
      'Automação de relatórios',
      'Métricas e KPIs sob medida',
    ],
  },
  {
    icon: Users,
    title: 'People Analytics',
    description:
      'Aplicamos ciência de dados à gestão de pessoas, com modelos preditivos e análises que embasam decisões estratégicas de RH.',
    bullets: [
      'Modelos preditivos de turnover',
      'Análise de engajamento e clima com NLP',
      'Decisões de RH orientadas por dados',
    ],
  },
  {
    icon: Brain,
    title: 'IA Generativa & Machine Learning aplicado a negócios',
    description:
      'Aplicamos LLMs, RAG e modelos de ML a problemas reais de negócio, gerando resultado mensurável em escala.',
    bullets: [
      'LLMs e RAG aplicados a processos reais',
      'Modelos preditivos e de precificação',
      'Detecção de risco e otimização',
    ],
  },
];

const Services = () => {
  const headingReveal = useScrollReveal<HTMLDivElement>();
  const gridReveal = useScrollReveal<HTMLDivElement>();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicos" className="section-padding bg-automato-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-automato-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto container-padding relative">
        <div ref={headingReveal} className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Serviços</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Mais de uma década estruturando dados, analytics e IA para grandes empresas.
          </p>
        </div>

        <div ref={gridReveal} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, description, bullets }, index) => (
            <div
              key={title}
              className="group relative bg-gradient-to-br from-automato-dark-blue/60 to-automato-black p-8 rounded-xl border border-automato-gold/15 hover:border-automato-gold/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(57,255,136,0.15)] overflow-hidden"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              ></div>

              <div className="relative flex items-start justify-between mb-6">
                <div className="h-12 w-12 rounded-lg bg-automato-gold/10 border border-automato-gold/30 flex items-center justify-center group-hover:bg-automato-gold/15 transition-colors">
                  <Icon className="h-6 w-6 text-automato-gold" />
                </div>
                <span className="font-mono text-xs text-white/30 tracking-widest pt-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="relative text-xl font-bold mb-3 text-white">{title}</h3>
              <p className="relative text-white/70 mb-6 leading-relaxed">{description}</p>

              <div className="relative h-px bg-gradient-to-r from-automato-gold/30 to-transparent mb-6"></div>

              <ul className="relative space-y-3 mb-6">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-white/60">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-automato-gold shrink-0"></span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="relative inline-flex items-center gap-1.5 text-sm text-automato-gold/90 hover:text-automato-gold transition-colors"
              >
                Saiba mais
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
