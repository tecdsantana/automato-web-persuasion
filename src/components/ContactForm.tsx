
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  return <section id="contato" className="section-padding bg-futuristic-gradient">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-6 text-white">Vamos transformar seu negócio <span className="heading-gradient">juntos</span></h2>
            <div className="gold-line mb-8 w-24"></div>
            <p className="text-lg text-white/80 mb-8">
              Preencha o formulário para uma consulta gratuita e descubra como nossos agentes de IA podem automatizar seus processos e impulsionar seus resultados.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full border border-automato-gold/50 flex items-center justify-center mr-4 shrink-0">
                  <div className="h-5 w-5 rounded-full bg-automato-gold/70"></div>
                </div>
                <div>
                  <h3 className="font-normal text-automato-gold mb-1">Análise Gratuita</h3>
                  <p className="text-white/70">
                    Avaliamos seus processos atuais e identificamos oportunidades de automação sem compromisso.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full border border-automato-gold/50 flex items-center justify-center mr-4 shrink-0">
                  <div className="h-5 w-5 rounded-full bg-automato-gold/70"></div>
                </div>
                <div>
                  <h3 className="font-normal text-automato-gold mb-1">Soluções Personalizadas</h3>
                  <p className="text-white/70">
                    Desenvolvemos agentes de IA adaptados às necessidades específicas do seu negócio.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full border border-automato-gold/50 flex items-center justify-center mr-4 shrink-0">
                  <div className="h-5 w-5 rounded-full bg-automato-gold/70"></div>
                </div>
                <div>
                  <h3 className="font-normal text-automato-gold mb-1">Suporte Contínuo</h3>
                  <p className="text-white/70">
                    Oferecemos suporte técnico e otimizações contínuas para garantir resultados duradouros.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="futuristic-card p-8 gold-glow animate-fade-in">
              <h3 className="text-2xl font-light text-white mb-6 tracking-wider">Solicite uma <span className="text-automato-gold">demonstração</span></h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/70 mb-1">Nome</label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome completo" 
                      className="bg-automato-dark-blue/50 border-automato-gold/30 text-white focus:border-automato-gold focus:gold-glow"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm text-white/70 mb-1">Empresa</label>
                    <Input 
                      id="company" 
                      placeholder="Nome da empresa" 
                      className="bg-automato-dark-blue/50 border-automato-gold/30 text-white focus:border-automato-gold focus:gold-glow"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-1">E-mail corporativo</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="bg-automato-dark-blue/50 border-automato-gold/30 text-white focus:border-automato-gold focus:gold-glow"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-white/70 mb-1">Telefone</label>
                  <Input 
                    id="phone" 
                    placeholder="(00) 00000-0000" 
                    className="bg-automato-dark-blue/50 border-automato-gold/30 text-white focus:border-automato-gold focus:gold-glow"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-white/70 mb-1">Como podemos ajudar sua empresa?</label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva seus desafios atuais e o que você busca automatizar..." 
                    className="h-32 bg-automato-dark-blue/50 border-automato-gold/30 text-white focus:border-automato-gold focus:gold-glow"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full button-gradient hover:gold-glow transition-all duration-300"
                >
                  SOLICITAR DEMONSTRAÇÃO GRATUITA
                </Button>
              </form>
              <p className="text-xs text-white/50 mt-4 text-center">
                Ao enviar este formulário, você concorda com nossa política de privacidade.
              </p>
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-automato-gold"></div>
              <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-automato-gold"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-automato-gold"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-automato-gold"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;
