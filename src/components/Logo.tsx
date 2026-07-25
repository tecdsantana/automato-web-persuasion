import React from 'react';
import { Link } from 'react-router-dom';
import flownineLogo from '@/assets/brand/flownine-logo.png';

const Logo = () => {
  return (
    <Link to="/" className="relative flex items-center">
      <img src={flownineLogo} alt="FlowNine" className="h-6 w-auto" />
    </Link>
  );
};

export default Logo;
