import './admin.css';
import LinkButton from '../../Components/LinkButton/linkButton';

export const Admin: React.FC = () => (
  <div className="container">
    <LinkButton to="/sprava/pracovnici">Pracovníci</LinkButton>
    <LinkButton to="/sprava/cinnosti">Činnosti</LinkButton>
    <LinkButton to="/sprava/prehledy">Editor přehledů</LinkButton>
  </div>
);
export default Admin;
