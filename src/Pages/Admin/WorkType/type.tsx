import './type.css';
import React from 'react';

// interface WorkTypeFormData {
//   title: string; 
//   code: string;
//   unit: number;
//   price: number; 
//   activ: boolean; 
// }

export const WorkType: React.FC = () => {


  return (
    <div className="work-page">
      <h1>Registrované činnosti</h1>
      <form className="work-form">
        <h2>Registrovat novou činnost</h2>
        <div className="form-row"></div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Název činnosti:</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="form-group">
            <label htmlFor="code">Zkratka:</label>
            <input type="text" id="code" name="code" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="unit">Jednotka:</label>
            <input type="number" id="unit" name="unit" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Cena za jednotku:</label>
            <input type="number" id="price" name="price" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="activ">Aktivní:</label>
            <input type="checkbox" id="activ" name="activ" />
          </div>
        </div>
        <button type="submit">Registrovat činnost</button>
      </form>
      <h2>Registrované činnosti</h2>
      <table className="work-table">
        <thead>
          <tr>
            <th>Název</th>
            <th>Zkratka</th>
            <th>Kategorie</th>
            <th>Cena v kč za jednotku</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorkType;
