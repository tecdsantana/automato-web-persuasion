
import React from 'react';
import { CircuitBoard } from "lucide-react";

const Logo = () => {
  return (
    <div className="relative flex items-center">
      {/* Main logo container */}
      <div className="relative h-9 w-12 mr-1">
        {/* Angular infinity shape - top part */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-automato-gold transform rotate-0"></div>
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-automato-gold transform rotate-0"></div>
        
        {/* Angular infinity shape - bottom part */}
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-automato-gold transform rotate-0"></div>
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-automato-gold transform rotate-0"></div>
        
        {/* Connecting lines for infinity effect */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-automato-gold transform -translate-y-1/2"></div>
        <div className="absolute top-0 left-1/2 h-full w-0.5 bg-automato-gold transform -translate-x-1/2"></div>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-70">
          <CircuitBoard size={14} className="text-automato-gold" />
        </div>
        
        {/* Glowing center point */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-automato-light-gold rounded-full animate-pulse-glow"></div>
      </div>
      
      {/* Text */}
      <span className="text-automato-gold font-light text-xs tracking-widest">AUTOMATO</span>
    </div>
  );
};

export default Logo;
