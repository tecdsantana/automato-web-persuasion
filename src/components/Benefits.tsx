
import React from 'react';
import { Clock, TrendingUp, Search, Users, Zap, CheckCircle, MessageSquare, Database, FileText, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios das Automações com IA</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-purple mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Nossas soluções de automação com IA trazem resultados comprovados para empresas de diversos segmentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Benefit 1 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-white border border-gray-100">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-5">
              <Clock className="h-6 w-6 text-automato-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Economia de Tempo</h3>
            <p className="text-gray-600">
              Reduza em até 80% o tempo gasto em tarefas repetitivas, liberando sua equipe para atividades estratégicas.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-white border border-gray-100">
            <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-5">
              <TrendingUp className="h-6 w-6 text-automato-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3">Aumento de Produtividade</h3>
            <p className="text-gray-600">
              Impulsione a eficiência operacional em até 200% com processos automatizados que funcionam 24/7.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-white border border-gray-100">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-5">
              <Search className="h-6 w-6 text-automato-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Redução de Erros</h3>
            <p className="text-gray-600">
              Minimize erros humanos e inconsistências com processos automatizados de alta precisão.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-white border border-gray-100">
            <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-5">
              <Users className="h-6 w-6 text-automato-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3">Experiência do Cliente</h3>
            <p className="text-gray-600">
              Ofereça respostas instantâneas e personalizadas para seus clientes, aumentando a satisfação.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-white border border-gray-100">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-5">
              <Zap className="h-6 w-6 text-automato-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Escalabilidade</h3>
            <p className="text-gray-600">
              Escale suas operações rapidamente sem a necessidade de contratar mais pessoal para tarefas operacionais.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-white border border-gray-100">
            <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-5">
              <CheckCircle className="h-6 w-6 text-automato-purple" />
            </div>
            <h3 className="text-xl font-bold mb-3">ROI Comprovado</h3>
            <p className="text-gray-600">
              Obtenha retorno sobre o investimento em menos de 3 meses com nossas soluções de automação.
            </p>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cases Reais de Sucesso</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-purple mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Conheça como nossos agentes de IA estão transformando empresas em diferentes áreas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* RH Case Study */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-automato-blue" />
                  </div>
                  <h3 className="text-xl font-bold">RH Inteligente</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A empresa XYZ reduziu o tempo de seleção de candidatos em 70% com nosso agente de IA para triagem de currículos 
                  e automatização do agendamento de entrevistas.
                </p>
                <div className="border-t pt-4">
                  <div className="flex items-center">
                    <span className="font-semibold text-blue-600">Resultados:</span>
                    <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      +45% contratações efetivas
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Case Study */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
                    <MessageSquare className="h-6 w-6 text-automato-purple" />
                  </div>
                  <h3 className="text-xl font-bold">Chatbots IA</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Crie um Agente IA conversacional para converter seus inbound leads de maneira imediata,
                  elevando a experiência do seu lead em qualquer canal de comunicação.
                </p>
                <div className="border-t pt-4">
                  <div className="flex items-center">
                    <span className="font-semibold text-blue-600">Resultados:</span>
                    <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      +63% leads qualificados
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operations Case Study */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <FileText className="h-6 w-6 text-automato-blue" />
                  </div>
                  <h3 className="text-xl font-bold">Análise de Dados</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Uma indústria implementou nosso agente de IA para prever falhas de equipamentos, 
                  reduzindo o tempo de inatividade não planejado em 85% e otimizando a manutenção preventiva.
                </p>
                <div className="border-t pt-4">
                  <div className="flex items-center">
                    <span className="font-semibold text-blue-600">Resultados:</span>
                    <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      -32% custos operacionais
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supply Chain Case Study */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
                    <Database className="h-6 w-6 text-automato-purple" />
                  </div>
                  <h3 className="text-xl font-bold">Gestão de Estoque</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Uma rede varejista implementou nosso sistema de previsão de demanda baseado em IA, 
                  reduzindo o excesso de estoque em 37% e aumentando a disponibilidade de produtos em 24%.
                </p>
                <div className="border-t pt-4">
                  <div className="flex items-center">
                    <span className="font-semibold text-blue-600">Resultados:</span>
                    <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      +18% margem de lucro
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Service Case Study */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-automato-blue" />
                  </div>
                  <h3 className="text-xl font-bold">Atendimento 24/7</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Uma empresa de telecomunicações automatizou 78% das interações de suporte com nossos agentes de IA, 
                  reduzindo o tempo médio de resolução de 48 horas para apenas 2 horas.
                </p>
                <div className="border-t pt-4">
                  <div className="flex items-center">
                    <span className="font-semibold text-blue-600">Resultados:</span>
                    <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      +92% satisfação do cliente
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-automato-blue to-automato-purple p-8 md:p-12 rounded-2xl text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Pronto para transformar seu negócio?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Agende uma consulta gratuita e descubra como nossos agentes de IA podem automatizar seus processos.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-automato-blue hover:bg-gray-100">
            Agendar Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
