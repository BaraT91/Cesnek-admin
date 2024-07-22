import './home.css';
import LinkButton from '../../Components/LinkButton/linkButton';
import React from 'react';

export const HomePage: React.FC = () => (
  <div className="container">
    <LinkButton to="/zadatPraci">Zadat práci</LinkButton>
    <LinkButton to="/prehledy">Přehledy</LinkButton>
    <LinkButton to="/sprava">Správa a mzdy</LinkButton>
  </div>
);
export default HomePage;
