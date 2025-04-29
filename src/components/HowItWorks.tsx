
import React from 'react';
import { CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-purple mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Nossa metodologia garantida para transformar seus processos com inteligência artificial e automação de ponta a ponta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="h-14 w-14 rounded-full bg-automato-blue/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-automato-blue">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Análise & Diagnóstico</h3>
            <p className="text-gray-600 mb-6">
              Analisamos seus processos atuais e identificamos oportunidades específicas para implementação de agentes de IA.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Mapeamento completo de processos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Identificação de gargalos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Cálculo de ROI estimado</span>
              </li>
            </ul>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="h-14 w-14 rounded-full bg-automato-purple/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-automato-purple">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Desenvolvimento & Treinamento</h3>
            <p className="text-gray-600 mb-6">
              Criamos agentes de IA personalizados que se integram perfeitamente aos seus sistemas existentes.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Agentes treinados com seus dados</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Integrações com sistemas atuais</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Testes rigorosos de qualidade</span>
              </li>
            </ul>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="h-14 w-14 rounded-full bg-automato-blue/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-automato-blue">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Implementação & Monitoramento</h3>
            <p className="text-gray-600 mb-6">
              Garantimos uma transição suave com suporte contínuo e otimizações baseadas em desempenho real.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Implementação sem interrupções</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Dashboard de métricas em tempo real</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">Otimização contínua de desempenho</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
