
import React from 'react';
import { Check } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

// Definição das oportunidades (colunas)
const opportunities = [
  { id: 'triagem', label: 'Triagem e Qualificação', shortLabel: 'Triagem' },
  { id: 'atendimento', label: 'Atendimento / FAQs', shortLabel: 'FAQs' },
  { id: 'agendamento', label: 'Agendamento', shortLabel: 'Agenda' },
  { id: 'sentimento', label: 'Análise de Sentimento', shortLabel: 'Sentimento' },
  { id: 'automacao', label: 'Automação de Tarefas', shortLabel: 'Automação' },
  { id: 'relatorios', label: 'Relatórios e Follow-up', shortLabel: 'Relatórios' },
  { id: 'documentos', label: 'Contratos e Documentos', shortLabel: 'Docs' },
  { id: 'monitoramento', label: 'Monitoramento', shortLabel: 'Monitor' },
];

// Matriz de soluções baseada no arquivo Excel
const solutionsMatrix = [
  {
    area: 'Recursos Humanos',
    shortArea: 'RH',
    opportunities: {
      triagem: { has: true, benefit: 'Redução do tempo de triagem de currículos em até 80%. Padronização na avaliação inicial de candidatos.' },
      atendimento: { has: true, benefit: 'Padronização das informações prestadas aos colaboradores. Disponibilidade 24/7 para consultas.' },
      agendamento: { has: true, benefit: 'Otimização do processo de entrevistas. Redução de conflitos de agenda e no-shows.' },
      sentimento: { has: true, benefit: 'Identificação precoce de insatisfação. Suporte à tomada de decisão em gestão de pessoas.' },
      automacao: { has: false, benefit: '' },
      relatorios: { has: false, benefit: '' },
      documentos: { has: false, benefit: '' },
      monitoramento: { has: false, benefit: '' },
    }
  },
  {
    area: 'Marketing',
    shortArea: 'MKT',
    opportunities: {
      triagem: { has: true, benefit: 'Qualificação automática de leads. Priorização de prospects com maior potencial de conversão.' },
      atendimento: { has: true, benefit: 'Respostas personalizadas baseadas no perfil do cliente. Nutrição automatizada de leads.' },
      agendamento: { has: true, benefit: 'Agendamento de demonstrações e reuniões comerciais sem intervenção humana.' },
      sentimento: { has: false, benefit: '' },
      automacao: { has: true, benefit: 'Campanhas personalizadas em escala. Otimização de investimentos em mídia.' },
      relatorios: { has: false, benefit: '' },
      documentos: { has: false, benefit: '' },
      monitoramento: { has: false, benefit: '' },
    }
  },
  {
    area: 'Vendas',
    shortArea: 'Vendas',
    opportunities: {
      triagem: { has: true, benefit: 'Identificação de oportunidades quentes. Priorização do pipeline de vendas.' },
      atendimento: { has: false, benefit: '' },
      agendamento: { has: false, benefit: '' },
      sentimento: { has: false, benefit: '' },
      automacao: { has: true, benefit: 'Follow-ups automáticos e personalizados. Aumento da produtividade do time comercial.' },
      relatorios: { has: true, benefit: 'Visão consolidada do funil de vendas. Previsibilidade de receita melhorada.' },
      documentos: { has: true, benefit: 'Geração automática de propostas comerciais. Redução de erros em contratos.' },
      monitoramento: { has: false, benefit: '' },
    }
  },
  {
    area: 'Financeiro',
    shortArea: 'FIN',
    opportunities: {
      triagem: { has: false, benefit: '' },
      atendimento: { has: true, benefit: 'Esclarecimento de dúvidas sobre pagamentos e faturas. Redução de chamados ao suporte.' },
      agendamento: { has: false, benefit: '' },
      sentimento: { has: true, benefit: 'Detecção de fraudes e anomalias em transações. Prevenção de perdas financeiras.' },
      automacao: { has: true, benefit: 'Reconciliação automática de pagamentos. Redução de trabalho manual e erros.' },
      relatorios: { has: false, benefit: '' },
      documentos: { has: false, benefit: '' },
      monitoramento: { has: false, benefit: '' },
    }
  },
  {
    area: 'Operações',
    shortArea: 'OPS',
    opportunities: {
      triagem: { has: false, benefit: '' },
      atendimento: { has: true, benefit: 'Suporte técnico de primeiro nível automatizado. Redução de tempo de resposta.' },
      agendamento: { has: false, benefit: '' },
      sentimento: { has: false, benefit: '' },
      automacao: { has: false, benefit: '' },
      relatorios: { has: false, benefit: '' },
      documentos: { has: false, benefit: '' },
      monitoramento: { has: true, benefit: 'Manutenção preditiva de equipamentos. Redução de downtime e custos operacionais.' },
    }
  },
  {
    area: 'Atendimento ao Cliente',
    shortArea: 'SAC',
    opportunities: {
      triagem: { has: false, benefit: '' },
      atendimento: { has: false, benefit: '' },
      agendamento: { has: false, benefit: '' },
      sentimento: { has: true, benefit: 'Identificação de clientes insatisfeitos em tempo real. Ação proativa de retenção.' },
      automacao: { has: false, benefit: '' },
      relatorios: { has: false, benefit: '' },
      documentos: { has: false, benefit: '' },
      monitoramento: { has: true, benefit: 'Acompanhamento de SLAs em tempo real. Alertas automáticos de escalação.' },
    }
  },
  {
    area: 'TI',
    shortArea: 'TI',
    opportunities: {
      triagem: { has: false, benefit: '' },
      atendimento: { has: false, benefit: '' },
      agendamento: { has: false, benefit: '' },
      sentimento: { has: false, benefit: '' },
      automacao: { has: true, benefit: 'Automação de tarefas repetitivas de suporte. Liberação do time para atividades estratégicas.' },
      relatorios: { has: false, benefit: '' },
      documentos: { has: false, benefit: '' },
      monitoramento: { has: true, benefit: 'Monitoramento proativo de infraestrutura. Detecção e resolução automática de incidentes.' },
    }
  },
  {
    area: 'Jurídico',
    shortArea: 'JUR',
    opportunities: {
      triagem: { has: false, benefit: '' },
      atendimento: { has: false, benefit: '' },
      agendamento: { has: false, benefit: '' },
      sentimento: { has: false, benefit: '' },
      automacao: { has: false, benefit: '' },
      relatorios: { has: false, benefit: '' },
      documentos: { has: true, benefit: 'Análise automática de contratos. Identificação de cláusulas de risco e inconsistências.' },
      monitoramento: { has: true, benefit: 'Acompanhamento de prazos processuais. Alertas automáticos de vencimentos.' },
    }
  },
];

const Testimonials = () => {
  return (
    <section id="solucoes" className="section-padding bg-automato-black">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Como entregamos valor com IA</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Desenvolvemos soluções inteligentes que já geraram valor em diversas áreas. 
            <span className="text-automato-gold"> Passe o mouse sobre os ícones</span> para ver os benefícios esperados.
          </p>
        </div>

        <TooltipProvider delayDuration={200}>
          <div className="overflow-x-auto rounded-xl border border-automato-gold/20 bg-automato-dark-blue/30">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-automato-gold/20 hover:bg-transparent">
                  <TableHead className="text-white font-semibold min-w-[140px] bg-automato-dark-blue/50 sticky left-0 z-10">
                    Área
                  </TableHead>
                  {opportunities.map((opp) => (
                    <TableHead 
                      key={opp.id} 
                      className="text-center text-white/80 font-medium min-w-[100px] px-2"
                    >
                      <span className="hidden lg:inline">{opp.label}</span>
                      <span className="lg:hidden">{opp.shortLabel}</span>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {solutionsMatrix.map((row, rowIndex) => (
                  <TableRow 
                    key={row.area}
                    className="border-b border-automato-gold/10 hover:bg-automato-gold/5 transition-colors"
                  >
                    <TableCell className="font-medium text-white bg-automato-dark-blue/50 sticky left-0 z-10">
                      <span className="hidden md:inline">{row.area}</span>
                      <span className="md:hidden">{row.shortArea}</span>
                    </TableCell>
                    {opportunities.map((opp) => {
                      const cell = row.opportunities[opp.id as keyof typeof row.opportunities];
                      return (
                        <TableCell key={opp.id} className="text-center p-3">
                          {cell.has ? (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="inline-flex items-center justify-center w-8 h-8 bg-automato-gold/20 rounded-full cursor-pointer hover:bg-automato-gold/30 hover:scale-110 transition-all duration-200">
                                  <Check className="w-4 h-4 text-automato-gold" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent 
                                side="top" 
                                className="max-w-xs bg-automato-dark-blue border border-automato-gold/30 p-3"
                              >
                                <p className="text-sm text-white/90 leading-relaxed">{cell.benefit}</p>
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <div className="w-8 h-8 inline-block" />
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TooltipProvider>

        {/* Legenda */}
        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-automato-gold/20 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-automato-gold" />
            </div>
            <span>Oportunidade de IA disponível</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
