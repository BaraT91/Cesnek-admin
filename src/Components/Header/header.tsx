import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


export const Header: React.FC = () => (
  <div className='header'>
  <Link to="./" className="logo"></Link>
    <h1 className='title'>Česnek-admin</h1>
  </div>
);
