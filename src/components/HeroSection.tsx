
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contato');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32 relative overflow-hidden bg-futuristic-gradient">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(30,58,138,0.15),transparent_70%)] opacity-70"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-automato-blue/5 to-transparent blur-3xl"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-automato-gold/20 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 border border-automato-gold/10 rounded-full opacity-10"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-20 bg-automato-gold/30"></div>
      <div className="absolute bottom-1/3 left-1/5 w-20 h-1 bg-automato-gold/30"></div>
      
      <div className="container mx-auto relative z-10 container-padding">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight max-w-3xl tracking-wider text-white">
              Revolucione seus negócios com <span className="heading-gradient font-normal">Agentes de IA Automatizados</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
              Potencialize sua produtividade e transforme seus processos com soluções de automação inteligente sob medida para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                size="lg" 
                className="button-gradient gold-glow text-base tracking-wide flex gap-2"
                onClick={scrollToContact}
              >
                AGENDAR DIAGNÓSTICO
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border border-automato-gold/70 text-automato-gold bg-transparent hover:bg-automato-gold/10 hover:gold-glow transition-all text-base tracking-wide"
                onClick={scrollToContact}
              >
                CONHECER SOLUÇÕES
              </Button>
            </div>
            <div className="mt-10 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-automato-neon-blue border-2 border-automato-gold/30 flex items-center justify-center text-xs text-white">JM</div>
                <div className="w-8 h-8 rounded-full bg-automato-blue border-2 border-automato-gold/30 flex items-center justify-center text-xs text-white">KL</div>
                <div className="w-8 h-8 rounded-full bg-automato-dark-blue border-2 border-automato-gold/30 flex items-center justify-center text-xs text-white">RB</div>
                <div className="w-8 h-8 rounded-full bg-automato-black border-2 border-automato-gold/30 flex items-center justify-center text-xs text-automato-gold">+</div>
              </div>
              <p className="ml-4 text-sm text-white/70">+150 empresas já transformaram seus negócios</p>
            </div>
          </div>
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-automato-blue/50 to-automato-gold/30 rounded-lg blur-md opacity-50"></div>
              <div className="relative bg-automato-dark-blue/50 p-1 rounded-lg futuristic-border">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Automação inteligente com IA" 
                  className="w-full h-auto rounded-lg object-cover opacity-80 filter contrast-125 brightness-75"
                />
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-automato-gold"></div>
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-automato-gold"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-automato-gold"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-automato-gold"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
