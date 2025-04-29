
import React from 'react';
import { Clock, TrendingUp, Search, Users, Zap, CheckCircle } from 'lucide-react';
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
