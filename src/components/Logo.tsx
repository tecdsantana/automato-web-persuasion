
import React from 'react';

const Logo = () => {
  return (
    <div className="relative flex items-center">
      <div className="mr-2">
        <svg width="24" height="24" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hexagon outline */}
          <path d="M100 10L167 50V150L100 190L33 150V50L100 10Z" 
                stroke="#D4AF37" strokeWidth="8" fill="none"/>
          
          {/* Inner geometric pattern */}
          <path d="M100 30L150 60V140L100 170L50 140V60L100 30Z" 
                stroke="#D4AF37" strokeWidth="6" fill="none"/>
          
          {/* Cross lines */}
          <path d="M50 60L150 140" stroke="#D4AF37" strokeWidth="6" fill="none"/>
          <path d="M150 60L50 140" stroke="#D4AF37" strokeWidth="6" fill="none"/>
          
          {/* Central element */}
          <circle cx="100" cy="100" r="10" fill="#D4AF37"/>
        </svg>
      </div>
      <span className="text-automato-gold font-light text-xs tracking-widest">ATENAFLOW</span>
    </div>
  );
};

export default Logo;
