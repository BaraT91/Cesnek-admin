import './home.css';
import LinkButton from '../../Components/LinkButton/linkButton';
import React from 'react';

export const HomePage: React.FC = () => (
  <div className="container">
    <LinkButton to="/reports">Přehledy</LinkButton>
    <LinkButton to="/work">Zadat práci</LinkButton>
  </div>
);
export default HomePage;
