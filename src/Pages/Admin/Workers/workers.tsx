import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = '/api/';

interface Worker {
  id: number;
  name: string;
  code: string;
  email: string;
  phone: string;
  note: string;
}

export const Workers: React.FC = () => {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [formData, setFormData] = useState<Omit<Worker, 'id'>>({
    name: '',
    code: '',
    email: '',
    phone: '',
    note: '',
  });

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    try {
      const response = await axios.get<Worker[]>(API_URL);
      setWorkers(response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching workers:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
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
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        note: formData.note,
      };
      console.log('Sending payload:', payload);
      const response = await axios.post<Worker>(API_URL, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response);
      setFormData({
        name: '',
        code: '',
        email: '',
        phone: '',
        note: '',
      });
      fetchWorkers(); // Refresh the list after submission
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error registering worker:', error.message);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          console.error('Request data:', error.request);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
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
              type="text"
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
            <tr key={worker.id}>
              <td>{worker.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Workers;
