
import React from 'react';

const Logo = () => {
  return (
    <div className="relative flex items-center">
      <div className="mr-2">
        <svg width="24" height="24" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Athena's Shield - Circular shield with owl symbol */}
          <circle cx="100" cy="100" r="85" stroke="#D4AF37" strokeWidth="6" fill="none" />
          
          {/* Decorative pattern around shield */}
          <path d="M100 15A85 85 0 0 1 100 185A85 85 0 0 1 100 15" 
                stroke="#D4AF37" strokeWidth="6" fill="none" strokeDasharray="15,10" />
          
          {/* Owl eyes - representing Athena's wisdom */}
          <circle cx="70" cy="85" r="15" stroke="#D4AF37" strokeWidth="4" fill="none" />
          <circle cx="130" cy="85" r="15" stroke="#D4AF37" strokeWidth="4" fill="none" />
          
          {/* Owl pupils */}
          <circle cx="70" cy="85" r="5" fill="#D4AF37" />
          <circle cx="130" cy="85" r="5" fill="#D4AF37" />
          
          {/* Owl beak */}
          <path d="M90 105 L100 115 L110 105" stroke="#D4AF37" strokeWidth="4" fill="none" />
          
          {/* Olive branch - symbol of peace and victory */}
          <path d="M50 130 Q80 110, 100 130 Q120 150, 150 130" 
                stroke="#D4AF37" strokeWidth="4" fill="none" />
                
          {/* Olive leaves */}
          <path d="M70 125 Q75 115, 80 125" stroke="#D4AF37" strokeWidth="2" />
          <path d="M90 130 Q95 120, 100 130" stroke="#D4AF37" strokeWidth="2" />
          <path d="M110 135 Q115 125, 120 135" stroke="#D4AF37" strokeWidth="2" />
          <path d="M130 130 Q135 120, 140 130" stroke="#D4AF37" strokeWidth="2" />
        </svg>
      </div>
      <span className="text-automato-gold font-light text-xs tracking-widest">ATENAFLOW</span>
    </div>
  );
};

export default Logo;
