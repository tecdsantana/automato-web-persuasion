
import React, { useState } from 'react';
import { Star, Plus, ChevronDown, ChevronRight } from 'lucide-react';
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
      opportunities: [
        {
          name: "Triagem e qualificação inicial de candidatos. Respostas a FAQs de RH",
          solution: "Chatbot no WhatsApp para coletar informações e responder perguntas frequentes sobre vagas e processos.",
          benefits: "Redução do tempo de triagem, liberação da equipe de RH para tarefas mais complexas, democratização das informações."
        },
        {
          name: "Agendamento e acompanhamento de entrevistas. Onboarding de novos colaboradores.",
          solution: "Fluxo de agendamento automatizado via WhatsApp. Envio de informações de onboarding e lembretes.",
          benefits: "Otimização do processo de agendamento, melhor experiência para o candidato/novo colaborador, redução de faltas."
        },
        {
          name: "Coleta de feedback via formulários (integrados via API). Análise de sentimento em pesquisas de clima ou feedback.",
          solution: "Identificação rápida de áreas de preocupação (via min). Análise de sentimento de texto utilizando um modelo de IA.",
          benefits: "Melhor e mais rápida compreensão do engajamento dos colaboradores, base para planos de ação."
        },
        {
          name: "Qualificação de leads e nutrição. Atendimento a dúvidas sobre produtos/serviços.",
          solution: "Chatbot no WhatsApp para qualificar leads (perguntas chave) e responder dúvidas. Envio de materiais de marketing personalizados.",
          benefits: "Aumento na qualidade dos leads passados para vendas, agilidade no atendimento, personalização da comunicação."
        }
      ]
    },
    {
      area: "Marketing",
      opportunities: [
        {
          name: "Automação de campanhas de marketing e notificações personalizadas.",
          solution: "Disparo automático de mensagens no WhatsApp com base em comportamento do usuário ou eventos (ex. carrinho abandonado, aniversário).",
          benefits: "Aumento no engajamento, recuperação de vendas perdidas, fortalecimento do relacionamento com o cliente."
        },
        {
          name: "Agendamento e distribuição de posts em redes sociais.",
          solution: "Fluxo automatizado para agendar posts em diversas plataformas a partir de um único ponto.",
          benefits: "Otimização do tempo da equipe de marketing, garantia de consistência na publicação."
        }
      ]
    },
    {
      area: "Vendas",
      opportunities: [
        {
          name: "Suporte ao cliente pré-venda. Recomendação de produtos/serviços.",
          solution: "Chatbot no WhatsApp para ajudar clientes a encontrar o produto certo, responder dúvidas técnicas ou de preço.",
          benefits: "Melhoria na experiência de compra, aumento na taxa de conversão, redução da carga de trabalho dos vendedores."
        },
        {
          name: "Geração de relatórios de vendas e follow-up de clientes.",
          solution: "Automação da geração de relatórios de performance em Supabase e envio de notificações de follow-up para vendedores via WhatsApp.",
          benefits: "Acompanhamento mais eficaz das oportunidades, tomada de decisão baseada em dados, aumento da produtividade da equipe."
        },
        {
          name: "Automação de propostas e contratos.",
          solution: "Fluxo automatizado para gerar propostas personalizadas com base nos dados do cliente e enviar para aprovação.",
          benefits: "Agilização do processo de vendas, redução de erros manuais, foco dos vendedores na negociação."
        }
      ]
    },
    {
      area: "Financeiro",
      opportunities: [
        {
          name: "Respostas a dúvidas sobre pagamentos, faturas e boletos.",
          solution: "Chatbot no WhatsApp para fornecer status de pagamento, segunda via de boleto, informações sobre parcelamento.",
          benefits: "Redução da carga de trabalho do financeiro com atendimento, agilidade para o cliente resolver pendências financeiras."
        },
        {
          name: "Processamento e conciliação bancária. Envio de lembretes de pagamento.",
          solution: "Automação da importação de extratos, conciliação com lançamentos no Supabase, envio de lembretes de vencimento via WhatsApp.",
          benefits: "Aumento na eficiência da conciliação, redução de erros, diminuição da inadimplência."
        },
        {
          name: "Análise de risco de crédito inicial.",
          solution: "Integração com fontes de dados de crédito (via API) e análise automatizada para gerar um score de risco inicial.",
          benefits: "Agilidade na análise de crédito, redução de riscos, tomada de decisão mais rápida."
        }
      ]
    },
    {
      area: "Operações",
      opportunities: [
        {
          name: "Gerenciamento de estoque. Programação básica de produção.",
          solution: "Notificações automáticas no WhatsApp sobre níveis críticos de estoque. Automação do planejamento de tarefas simples de produção.",
          benefits: "Otimização do controle de estoque, prevenção de rupturas, melhoria na organização da produção."
        },
        {
          name: "Rastreamento e notificações de entrega.",
          solution: "Envio automático de atualizações de status de pedidos e rastreamento via WhatsApp.",
          benefits: "Melhoria na satisfação do cliente, redução de chamados de suporte sobre status de entrega."
        }
      ]
    },
    {
      area: "Atendimento ao Cliente / Suporte",
      opportunities: [
        {
          name: "Suporte técnico básico e FAQ operacional.",
          solution: "Chatbot no WhatsApp para responder a perguntas frequentes de clientes ou colaboradores sobre processos operacionais.",
          benefits: "Redução da carga de trabalho do suporte, agilidade na resolução de problemas simples."
        },
        {
          name: "Chatbot de suporte avançado com encaminhamento inteligente.",
          solution: "Chatbot no WhatsApp que entende a intenção do cliente e o encaminha para o departamento ou agente correto.",
          benefits: "Resolução rápida de problemas, direcionamento correto dos atendimentos, otimização do tempo dos agentes."
        },
        {
          name: "Análise de sentimento em interações de suporte.",
          solution: "Análise do sentimento das conversas no WhatsApp para identificar clientes insatisfeitos ou problemas recorrentes.",
          benefits: "Identificação proativa de clientes em risco, insights para melhoria de processos e produtos, monitoramento da qualidade do atendimento."
        },
        {
          name: "Monitoramento e notificações de incidentes.",
          solution: "Alertas automáticos no WhatsApp quando ocorrem problemas em sistemas, servidores ou aplicações.",
          benefits: "Redução do tempo de resposta a incidentes, comunicação eficaz com a equipe de TI."
        }
      ]
    },
    {
      area: "TI",
      opportunities: [
        {
          name: "Automação de tarefas de rotina (backups, verificações).",
          solution: "Fluxos automatizados para executar tarefas programadas e notificar sobre o status no WhatsApp.",
          benefits: "Redução da carga de trabalho manual, garantia de execução das tarefas críticas."
        }
      ]
    },
    {
      area: "Jurídico",
      opportunities: [
        {
          name: "Gerenciamento e acompanhamento de contratos.",
          solution: "Notificações automáticas no WhatsApp sobre prazos de contratos, vencimentos e renovações.",
          benefits: "Prevenção da perda de prazos importantes, organização do fluxo de trabalho jurídico."
        },
        {
          name: "Análise preliminar de documentos.",
          solution: "Utilização de modelos de IA para identificar cláusulas chave ou termos específicos em documentos (requer integração com serviços de OCR).",
          benefits: "Agilização da revisão documental, foco na análise humana dos aspectos críticos."
        }
      ]
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
        
        {/* Tabela de Oportunidades de IA - Nova versão com accordion */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Oportunidades de Implementação</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Veja como as soluções de IA podem ser implementadas em diferentes áreas da sua empresa.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {implementationOpportunities.map((area, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="mb-4 bg-automato-dark-blue/50 rounded-lg border border-automato-gold/20 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-automato-dark-blue/70 transition-colors">
                    <span className="text-xl font-medium text-automato-gold">{area.area}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[800px] border-collapse">
                        <thead>
                          <tr className="border-b border-automato-gold/20">
                            <th className="py-3 text-left text-sm font-medium text-automato-gold/90 w-1/3">
                              Oportunidade de IA / Automação Inteligente
                            </th>
                            <th className="py-3 text-left text-sm font-medium text-automato-gold/90 w-1/3">
                              Solução Proposta com IA / Automação
                            </th>
                            <th className="py-3 text-left text-sm font-medium text-automato-gold/90 w-1/3">
                              Benefícios e Resultados
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {area.opportunities.map((opp, oppIndex) => (
                            <tr 
                              key={oppIndex} 
                              className="border-b border-automato-gold/10 last:border-0 hover:bg-automato-dark-blue/40 transition-colors"
                            >
                              <td className="py-4 align-top text-sm text-white/80">{opp.name}</td>
                              <td className="py-4 align-top text-sm text-white/80">{opp.solution}</td>
                              <td className="py-4 align-top text-sm text-white/80">{opp.benefits}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12 text-white/60 text-sm">
            <p>Clique em cada área para expandir e ver as oportunidades de implementação.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
