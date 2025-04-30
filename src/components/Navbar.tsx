
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <header className={`w-full py-4 fixed top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-automato-black/95 backdrop-blur-md border-b border-automato-gold/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between container-padding">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <nav className="hidden md:flex space-x-10">
          <a href="#como-funciona" className="text-white/80 hover:text-automato-gold transition-colors text-sm tracking-wider">COMO FUNCIONA</a>
          <a href="#beneficios" className="text-white/80 hover:text-automato-gold transition-colors text-sm tracking-wider">BENEFÍCIOS</a>
          <a href="#depoimentos" className="text-white/80 hover:text-automato-gold transition-colors text-sm tracking-wider">DEPOIMENTOS</a>
        </nav>
        
        <div>
          <Button 
            className="border border-automato-gold text-automato-gold bg-transparent hover:bg-automato-gold/10 hover:gold-glow transition-all duration-300" 
          >
            FALE CONOSCO
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
