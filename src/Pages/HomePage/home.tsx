import './home.css';
import LinkButton from '../Components/LinkButton/linkButton';
import React from 'react';

export const HomePage: React.FC = () => (
  <div className="container">
    <LinkButton to="/workers">Evidence brigádníků</LinkButton>
    <LinkButton to="/work">Evidence práce</LinkButton>
  </div>
);
