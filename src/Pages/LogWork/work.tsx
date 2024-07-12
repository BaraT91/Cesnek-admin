import React from 'react';
import './work.css';

export const Work: React.FC = () => {
  return (
    <div className="work-page">
      <h1>Zadat práci</h1>
      <form className="work-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Datum:</label>
            <input type="date" id="date" name="date" />
          </div>
          <div className="form-group">
            <label htmlFor="time">Čas:</label>
            <input type="time" id="time" name="time" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="worker">Pracovník:</label>
            <input type="text" id="worker" name="worker" />
          </div>
          <div className="form-group">
            <label htmlFor="activity">Činnost:</label>
            <input type="text" id="activity" name="activity" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="unitCount">Počet jednotek:</label>
            <input type="number" id="unitCount" name="unitCount" />
          </div>
          <div className="form-group">
            <label htmlFor="unitPrice">Částka za jednotku v kč:</label>
            <input type="number" id="unitPrice" name="unitPrice" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="totalAmount">Celková částka v kč:</label>
            <input type="number" id="totalAmount" name="totalAmount" />
          </div>
        </div>
        <button type="submit">Uložit práci</button>
      </form>
      <button className="filter-button">Třídit podle:</button>
      <h2>Registrované práce</h2>
      <table className="work-table">
        <thead>
          <tr>
            <th>Datum</th>
            <th>Pracovník</th>
            <th>Činnost</th>
            <th>Množství</th>
            <th>Odměna v kč</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10/06/2024</td>
            <td>Barbora Tesařová</td>
            <td>Peskování lidí</td>
            <td>8</td>
            <td>1600</td>
          </tr>
          <tr>
            <td>11/06/2024</td>
            <td>Jindříšek Kozák</td>
            <td>Rošťačení</td>
            <td>12</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Work;
