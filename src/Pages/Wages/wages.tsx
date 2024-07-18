import React, { useEffect, useState } from 'react';
import { fetchWorkers, Worker } from '../../Components/ApiService/apiService';
import { useNavigate } from 'react-router-dom';

export const Wages: React.FC = () => {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadWorkers = async () => {
      try {
        const data = await fetchWorkers();
        setWorkers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch workers', error);
        setLoading(false);
      }
    };

    loadWorkers();
  }, []);

  const handleRowClick = (id: number) => {
    navigate(`/worker/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page">
      <h2>Seznam pracovníků:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Jméno</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker) => (
            <tr key={worker.id} onClick={() => handleRowClick(worker.id)}className="clickable-row">
              <td>{worker.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
