
import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  // Implementation opportunities data structure
  const implementationOpportunities = [
    {
      area: "Recursos Humanos (RH)",
      description: "Automatize processos de recrutamento, onboarding e gestão de pessoas",
      opportunities: ["Triagem e qualificação de candidatos", "Agendamento de entrevistas", "Onboarding de novos colaboradores", "Pesquisas de clima organizacional"]
    },
    {
      area: "Marketing",
      description: "Aumente o engajamento com comunicações personalizadas",
      opportunities: ["Qualificação de leads", "Campanhas automatizadas", "Distribuição de conteúdo", "Atendimento a dúvidas sobre produtos"]
    },
    {
      area: "Vendas",
      description: "Potencialize resultados com atendimento inteligente",
      opportunities: ["Suporte pré-venda", "Recomendação de produtos", "Geração de propostas", "Follow-up de clientes"]
    },
    {
      area: "Financeiro",
      description: "Simplifique processos e melhore a experiência do cliente",
      opportunities: ["Esclarecimento sobre pagamentos", "Envio de boletos", "Lembretes de vencimento", "Análise inicial de crédito"]
    },
    {
      area: "Atendimento ao Cliente",
      description: "Ofereça suporte 24/7 com respostas imediatas",
      opportunities: ["Respostas a perguntas frequentes", "Encaminhamento inteligente", "Suporte técnico básico", "Feedback e satisfação"]
    }
  ];

  return (
    <section id="solucoes" className="section-padding bg-automato-black">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Oportunidades de Implementação</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Transforme seu negócio com soluções de IA personalizadas para cada área da sua empresa.
          </p>
        </div>

        <div className="bg-automato-dark-blue/30 p-6 rounded-xl border border-automato-gold/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-automato-gold">Diversos setores sendo transformados com IA</h3>
          
          <div className="space-y-4">
            {implementationOpportunities.map((area, index) => (
              <div key={index} className="bg-automato-dark-blue/50 p-4 rounded-lg border border-automato-gold/10 hover:border-automato-gold/30 transition-colors">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-automato-blue/20 flex items-center justify-center mr-3 border border-automato-gold/20">
                    <ChevronRight className="h-5 w-5 text-automato-gold" />
                  </div>
                  <h4 className="text-xl font-medium text-white">{area.area}</h4>
                </div>
                <p className="text-white/70 mb-3 pl-11">{area.description}</p>
                <div className="flex flex-wrap gap-2 pl-11">
                  {area.opportunities.map((opp, i) => (
                    <span key={i} className="bg-automato-blue/10 text-white/80 text-xs px-3 py-1 rounded-full border border-automato-gold/10">
                      {opp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
