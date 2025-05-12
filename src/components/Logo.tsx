
import React from 'react';

const Logo = () => {
  return (
    <div className="relative flex items-center">
      <div className="mr-2">
        <svg width="24" height="24" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base do nó (círculo central) */}
          <circle cx="100" cy="100" r="40" fill="#D4AF37" fillOpacity="0.2" stroke="#D4AF37" strokeWidth="4"/>
          
          {/* Conexões do nó - representando as ramificações da decisão */}
          <line x1="100" y1="40" x2="100" y2="10" stroke="#D4AF37" strokeWidth="4" />
          <line x1="140" y1="100" x2="170" y2="100" stroke="#D4AF37" strokeWidth="4" />
          <line x1="100" y1="160" x2="100" y2="190" stroke="#D4AF37" strokeWidth="4" />
          <line x1="60" y1="100" x2="30" y2="100" stroke="#D4AF37" strokeWidth="4" />
          
          {/* Nós filhos - menores */}
          <circle cx="100" cy="10" r="10" fill="#D4AF37" />
          <circle cx="170" cy="100" r="10" fill="#D4AF37" />
          <circle cx="100" cy="190" r="10" fill="#D4AF37" />
          <circle cx="30" cy="100" r="10" fill="#D4AF37" />
          
          {/* Conexões diagonais */}
          <line x1="135" y1="65" x2="160" y2="40" stroke="#D4AF37" strokeWidth="3" />
          <line x1="135" y1="135" x2="160" y2="160" stroke="#D4AF37" strokeWidth="3" />
          <line x1="65" y1="135" x2="40" y2="160" stroke="#D4AF37" strokeWidth="3" />
          <line x1="65" y1="65" x2="40" y2="40" stroke="#D4AF37" strokeWidth="3" />
          
          {/* Nós diagonais menores */}
          <circle cx="160" cy="40" r="8" fill="#D4AF37" />
          <circle cx="160" cy="160" r="8" fill="#D4AF37" />
          <circle cx="40" cy="160" r="8" fill="#D4AF37" />
          <circle cx="40" cy="40" r="8" fill="#D4AF37" />
          
          {/* Elemento de dado no núcleo (símbolo de binário) */}
          <text x="86" y="105" fill="#D4AF37" fontSize="24" fontWeight="bold">10</text>
        </svg>
      </div>
      <span className="text-automato-gold font-light text-xs tracking-widest">FLOWNINE</span>
    </div>
  );
};

export default Logo;
