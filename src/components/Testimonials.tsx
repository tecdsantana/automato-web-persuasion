
import React, { useState } from 'react';
import { Headphones, BarChart3, Target, FileText, Cog, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  const industries = [
    "Varejo",
    "Logística",
    "Mercado Financeiro",
    "Consumo",
    "Educação",
    "Saúde"
  ];

  const solutions = [
    {
      icon: Headphones,
      title: "Suporte inteligente ao cliente",
      description: "Chatbots via IA que atendem 24/7 com alta precisão e integração com CRM."
    },
    {
      icon: BarChart3,
      title: "Análise preditiva",
      description: "Modelos que preveem demanda, otimização de estoque, precificação ideal e rotas logísticas ideais."
    },
    {
      icon: Target,
      title: "Marketing e segmentação",
      description: "Clusterização de clientes com foco na criação de campanhas de marketing personalizadas."
    },
    {
      icon: FileText,
      title: "Análise inteligente de documentos",
      description: "Uso de IA para rápida revisão e extração de inteligência para tomada de decisão."
    },
    {
      icon: Cog,
      title: "Automação de tarefas",
      description: "Agentes que executam processos repetitivos, aumentando a eficiência operacional."
    },
    {
      icon: Sparkles,
      title: "Outras soluções sob medida",
      description: "Desenvolvemos outros casos de uso de IA conforme a necessidade do seu negócio."
    }
  ];

  return (
    <section id="solucoes" className="section-padding bg-automato-black">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Como entregamos valor com IA</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Desenvolvemos soluções inteligentes que já geraram valor em diversas indústrias.
          </p>
        </div>

        {/* Industry Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveIndustry(activeIndustry === industry ? null : industry)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeIndustry === industry
                  ? 'bg-automato-gold text-automato-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-automato-gold/20 text-automato-gold border border-automato-gold/30 hover:bg-automato-gold/30'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-automato-dark-blue/30 p-6 rounded-xl border border-automato-gold/10 hover:border-automato-gold/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] group"
            >
              <div className="h-12 w-12 rounded-lg bg-automato-gold/10 flex items-center justify-center mb-4 group-hover:bg-automato-gold/20 transition-colors">
                <solution.icon className="h-6 w-6 text-automato-gold" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{solution.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
