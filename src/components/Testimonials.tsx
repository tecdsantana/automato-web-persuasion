
import React, { useState } from 'react';
import { Star, MessageCircle, ChevronRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendes",
      position: "Diretor de Tecnologia",
      company: "TechSolve Brasil",
      text: "A implementação dos agentes de IA da Automato reduziu nosso tempo de processamento de pedidos em 70% e praticamente eliminou os erros. O ROI foi alcançado em apenas 2 meses.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 5,
    },
    {
      id: 2,
      name: "Fernanda Lima",
      position: "CEO",
      company: "Fintech Solutions",
      text: "Automatizamos nossa análise de crédito com os agentes de IA da Automato e conseguimos aumentar nossa capacidade de processamento em 300%. Nossa equipe agora foca no que realmente importa.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: 5,
    },
    {
      id: 3,
      name: "Ricardo Almeida",
      position: "Gerente de Operações",
      company: "LogTech Transportes",
      text: "A automação dos nossos processos de roteirização com IA reduziu nossos custos operacionais em 30% e melhorou significativamente a satisfação dos clientes com entregas mais precisas.",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg",
      stars: 5,
    },
  ];

  return (
    <section id="depoimentos" className="section-padding bg-automato-black">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">O Que Nossos Clientes Dizem</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Veja como nossas soluções de automação com IA têm transformado empresas de diferentes setores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-automato-dark-blue/50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-automato-gold/20 futuristic-card"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-automato-gold text-automato-gold" />
                ))}
              </div>
              <p className="text-white/80 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover border border-automato-gold/30"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-automato-gold">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <img src="https://via.placeholder.com/180x60?text=Logo+Cliente" alt="Logo Cliente" className="h-12 opacity-50 hover:opacity-80 transition-opacity" />
          <img src="https://via.placeholder.com/180x60?text=Logo+Cliente" alt="Logo Cliente" className="h-12 opacity-50 hover:opacity-80 transition-opacity" />
          <img src="https://via.placeholder.com/180x60?text=Logo+Cliente" alt="Logo Cliente" className="h-12 opacity-50 hover:opacity-80 transition-opacity" />
          <img src="https://via.placeholder.com/180x60?text=Logo+Cliente" alt="Logo Cliente" className="h-12 opacity-50 hover:opacity-80 transition-opacity" />
          <img src="https://via.placeholder.com/180x60?text=Logo+Cliente" alt="Logo Cliente" className="h-12 opacity-50 hover:opacity-80 transition-opacity" />
        </div>
        
        {/* Nova seção de Oportunidades de Implementação com layout simplificado e WhatsApp mock */}
        <div id="solucoes" className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Oportunidades de Implementação</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Transforme seu negócio com soluções de IA personalizadas para cada área da sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Lado Esquerdo - Tabela simplificada */}
            <div className="bg-automato-dark-blue/30 p-6 rounded-xl border border-automato-gold/20">
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
            
            {/* Lado Direito - Imagem de interação com WhatsApp */}
            <div className="bg-automato-dark-blue/30 p-6 rounded-xl border border-automato-gold/20 relative overflow-hidden">
              <div className="flex flex-col items-center">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-automato-gold">Automatize seu Atendimento</h3>
                  <p className="text-white/70">Veja como é simples automatizar processos via WhatsApp</p>
                </div>
                
                <div className="relative mx-auto">
                  {/* Frame do celular */}
                  <div className="w-full max-w-[300px] border-8 border-[#333] rounded-[32px] overflow-hidden shadow-2xl relative">
                    {/* Barra superior */}
                    <div className="bg-[#075E54] text-white p-3 flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-white" />
                      <div>
                        <p className="font-medium">Automato IA</p>
                        <p className="text-xs opacity-80">Online</p>
                      </div>
                    </div>
                    
                    {/* Conteúdo da conversa */}
                    <div className="bg-[#E5DDD5] bg-opacity-30 p-3 h-[400px] overflow-y-auto space-y-3">
                      {/* Mensagem do bot */}
                      <div className="bg-white rounded-lg p-3 max-w-[80%] ml-0 shadow-sm">
                        <p className="text-sm">Olá! Sou o assistente virtual da Automato. Como posso ajudar hoje?</p>
                        <p className="text-[10px] text-right text-gray-500">09:30</p>
                      </div>
                      
                      {/* Mensagem do usuário */}
                      <div className="bg-[#DCF8C6] rounded-lg p-3 max-w-[80%] ml-auto shadow-sm">
                        <p className="text-sm">Quero saber sobre automatização de atendimento</p>
                        <p className="text-[10px] text-right text-gray-500">09:31</p>
                      </div>
                      
                      {/* Mensagem do bot */}
                      <div className="bg-white rounded-lg p-3 max-w-[80%] ml-0 shadow-sm">
                        <p className="text-sm">Com a Automato, você pode automatizar seu atendimento ao cliente, triagem de leads, agendamentos e muito mais!</p>
                        <p className="text-[10px] text-right text-gray-500">09:31</p>
                      </div>
                      
                      {/* Mensagem do bot com botões */}
                      <div className="bg-white rounded-lg p-3 max-w-[80%] ml-0 shadow-sm">
                        <p className="text-sm mb-2">O que você gostaria de conhecer?</p>
                        <div className="space-y-2">
                          <button className="bg-automato-blue text-white text-xs w-full py-1 px-2 rounded">Agendar demonstração</button>
                          <button className="bg-automato-blue text-white text-xs w-full py-1 px-2 rounded">Solicitar orçamento</button>
                          <button className="bg-automato-blue text-white text-xs w-full py-1 px-2 rounded">Falar com atendente</button>
                        </div>
                        <p className="text-[10px] text-right text-gray-500">09:32</p>
                      </div>
                      
                      {/* Mensagem do usuário */}
                      <div className="bg-[#DCF8C6] rounded-lg p-3 max-w-[80%] ml-auto shadow-sm">
                        <p className="text-sm">Quero agendar uma demonstração</p>
                        <p className="text-[10px] text-right text-gray-500">09:32</p>
                      </div>
                      
                      {/* Mensagem do bot */}
                      <div className="bg-white rounded-lg p-3 max-w-[80%] ml-0 shadow-sm animate-pulse">
                        <p className="text-sm">Ótimo! Temos horários disponíveis esta semana. Qual dia seria melhor para você?</p>
                        <p className="text-[10px] text-right text-gray-500">09:32</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ícone flutuante de WhatsApp */}
                  <div className="absolute -right-4 -bottom-4 bg-[#25D366] p-3 rounded-full shadow-lg border-4 border-automato-black">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-white/80 text-sm">Transforme seu atendimento com nossa plataforma de IA</p>
                  <button className="mt-3 bg-automato-gold/80 hover:bg-automato-gold text-automato-black font-medium px-4 py-2 rounded-lg flex items-center gap-2 mx-auto">
                    <MessageCircle className="h-5 w-5" />
                    Começar agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
