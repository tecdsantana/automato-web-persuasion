
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos transformar seu negócio juntos</h2>
            <p className="text-lg text-gray-700 mb-8">
              Preencha o formulário para uma consulta gratuita e descubra como nossos agentes de IA podem automatizar seus processos e impulsionar seus resultados.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-automato-blue/10 flex items-center justify-center mr-4 shrink-0">
                  <div className="h-5 w-5 rounded-full bg-automato-blue"></div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Análise Gratuita</h3>
                  <p className="text-gray-600">
                    Avaliamos seus processos atuais e identificamos oportunidades de automação sem compromisso.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-automato-purple/10 flex items-center justify-center mr-4 shrink-0">
                  <div className="h-5 w-5 rounded-full bg-automato-purple"></div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Soluções Personalizadas</h3>
                  <p className="text-gray-600">
                    Desenvolvemos agentes de IA adaptados às necessidades específicas do seu negócio.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-automato-blue/10 flex items-center justify-center mr-4 shrink-0">
                  <div className="h-5 w-5 rounded-full bg-automato-blue"></div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Suporte Contínuo</h3>
                  <p className="text-gray-600">
                    Oferecemos suporte técnico e otimizações contínuas para garantir resultados duradouros.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Solicite uma demonstração</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                    <Input id="company" placeholder="Nome da empresa" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail corporativo</label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <Input id="phone" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Como podemos ajudar sua empresa?</label>
                  <Textarea id="message" placeholder="Descreva seus desafios atuais e o que você busca automatizar..." className="h-32" />
                </div>
                <Button type="submit" className="w-full button-gradient">
                  Solicitar Demonstração Gratuita
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Ao enviar este formulário, você concorda com nossa política de privacidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
