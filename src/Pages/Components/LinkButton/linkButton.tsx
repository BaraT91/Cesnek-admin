import React from 'react';
import { Link } from 'react-router-dom';
import './linkButton.css'

interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, children }) => {
  return (
    <Link to={to} 
    // style={{ textDecoration: 'none' }}
    >
      <button
        // style={{ padding: '10px 20px', fontSize: '25px', cursor: 'pointer' }}
      >
        {children}
      </button>
    </Link>
  );
};

export default LinkButton;
