import React from 'react';

export const Workers: React.FC = () => {
  return (
    <div className="page">
      <h1>Brigádníci</h1>
      <form className="form">
        <h2>Registrovat nového brigádníka</h2>
        <div className="form-row"></div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Jméno a přijímení:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="code">ID:</label>
            <input type="text" id="code" name="code" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="mail">Email:</label>
            <input type="text" id="mail" name="mail" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefonní číslo:</label>
            <input type="number" id="phone" name="phone" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="note">Poznámka:</label>
            <input type="text" id="note" name="note" />
          </div>
        </div>
        <button type="submit">Registrovat brigádníka</button>
      </form>
      <h2>Seznam brigádníků</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Jméno</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Barbora Tesařová</td>
          </tr>
          <tr>
            <td>Jindříšek Kozák</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default Workers;
