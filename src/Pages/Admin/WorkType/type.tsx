import './type.css';
import React, { useState } from 'react';

interface WorkTypeForm {
  title: string;
  code: string;
  unit: number;
  price: number;
  activ: boolean;
}

export const WorkType: React.FC = () => {
  const [form, setForm] = useState<WorkTypeForm>({
    title: '',
    code: '',
    unit: 0,
    price: 0,
    activ: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="work-page">
      <h1>Registrované činnosti</h1>
      <form className="work-form" onSubmit={handleSubmit}>
        <h2>Registrovat novou činnost</h2>
        <div className="form-row">
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Název činnosti:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="code">Zkratka:</label>
            <input
              type="text"
              id="code"
              name="code"
              value={form.code}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="unit">Jednotka:</label>
            <input
              type="number"
              id="unit"
              name="unit"
              value={form.unit}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Cena za jednotku:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="activ">Aktivní:</label>
            <input
              type="checkbox"
              id="activ"
              name="activ"
              checked={form.activ}
              onChange={handleChange}
            />
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
