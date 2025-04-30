
import React from 'react';

const Logo = () => {
  return (
    <div className="relative h-8 w-8">
      {/* Outer hexagon */}
      <div className="absolute inset-0 border border-automato-gold rotate-0 opacity-70"></div>
      
      {/* Inner hexagon */}
      <div className="absolute inset-1 border border-automato-gold rotate-45 opacity-90"></div>
      
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-automato-gold rounded-full animate-pulse-glow"></div>
      
      {/* Horizontal line */}
      <div className="absolute top-1/2 w-full h-px bg-automato-gold transform -translate-y-1/2"></div>
      
      {/* Text */}
      <span className="absolute -right-7 top-1/2 transform -translate-y-1/2 text-automato-gold font-light text-xs tracking-widest">AUTOMATO</span>
    </div>
  );
};

export default Logo;
