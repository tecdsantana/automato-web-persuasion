
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full py-4 border-b bg-white bg-opacity-80 backdrop-blur-md fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between container-padding">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold heading-gradient">Automato</h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#como-funciona" className="text-gray-600 hover:text-automato-blue transition-colors">Como Funciona</a>
          <a href="#beneficios" className="text-gray-600 hover:text-automato-blue transition-colors">Benefícios</a>
          <a href="#depoimentos" className="text-gray-600 hover:text-automato-blue transition-colors">Depoimentos</a>
        </nav>
        
        <div>
          <Button className="button-gradient">Fale Conosco</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
