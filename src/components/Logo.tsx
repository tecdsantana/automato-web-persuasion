import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="relative flex items-center">
      <span className="text-automato-gold font-light text-sm tracking-widest">FLOWNINE AI</span>
    </Link>
  );
};

export default Logo;
