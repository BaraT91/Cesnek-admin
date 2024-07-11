import './home.css';
import LinkButton from '../../Components/LinkButton/linkButton';
import React from 'react';

export const HomePage: React.FC = () => (
  <div className="container">
    <LinkButton to="/zadatPraci">Zadat práci</LinkButton>
    <LinkButton to="/prehledy">Přehledy</LinkButton>
    <LinkButton to="/mzdy">Mzdy</LinkButton>
    <LinkButton to="/sprava">Správa</LinkButton>
  </div>
);
export default HomePage;
