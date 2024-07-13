import './reports.css';
import LinkButton from '../../Components/LinkButton/linkButton';

export const Reports: React.FC = () => (
  <div className="container">
    <LinkButton to="/prehledy/nabaleno">Nabaleno dle data</LinkButton>
    <LinkButton to="/prehledy/objednano">Tabulka objednávek</LinkButton>
  </div>
);
export default Reports;
