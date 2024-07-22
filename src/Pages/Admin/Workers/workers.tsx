import React, { useState, useEffect } from 'react';
import {
  fetchWorkers,
  createWorker,
  Worker,
} from '../../../Components/ApiService/apiService';
import { useNavigate } from 'react-router-dom';

export const Workers: React.FC = () => {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [formData, setFormData] = useState<Omit<Worker, 'id' | 'code'>>({
    name: '',
    email: '',
    phone: '',
    note: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchWorkersList();
  }, []);

  const fetchWorkersList = async () => {
    try {
      const workersData = await fetchWorkers();
      setWorkers(workersData);
    } catch (error) {
      console.error('Error fetching workers:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name) {
      alert('Please fill in the name field.');
      return;
    }

    try {
      console.log('Submitting form with data:', formData);
      const newWorker = await createWorker(formData);
      console.log('Worker created:', newWorker);
      setFormData({
        name: '',
        email: '',
        phone: '',
        note: '',
      });
      fetchWorkersList();
    } catch (error) {
      console.error('Error creating worker:', error);
    }
  };

  const handleRowClick = (id: number) => {
    navigate(`/worker/${id}`);
  };

  return (
    <div className="page">
      <h1>Pracovníci 👩🏽‍🌾</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registrovat nového pracovníka</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Jméno a přijímení:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefonní číslo:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="note">Poznámka:</label>
            <input
              type="text"
              id="note"
              name="note"
              value={formData.note}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit">Registrovat pracovníka</button>
      </form>
      <h2>Seznam pracovníků:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Jméno</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker) => (
            <tr
              key={worker.id}
              onClick={() => handleRowClick(worker.id)}
              className="clickable-row"
            >
              <td>{worker.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Workers;
