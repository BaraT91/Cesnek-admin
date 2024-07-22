import React, { useEffect, useState, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchWorkerById,
  Worker,
} from '../../Components/ApiService/apiService';

export const WorkerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [worker, setWorker] = useState<Worker | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [wageData, setWageData] = useState({ date: '', note: '', unit: '' });

  useEffect(() => {
    const loadWorker = async () => {
      if (id) {
        try {
          const data = await fetchWorkerById(id);
          setWorker(data);
          setLoading(false);
        } catch (error) {
          console.error('Failed to fetch worker', error);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    loadWorker();
  }, [id]);

  const handleWageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWageData({
      ...wageData,
      [name]: value,
    });
  };

  const handleWageSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Wage data:', wageData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!worker) {
    return <div>Worker not found</div>;
  }

  return (
    <div className="page">
      <h1>{worker.name}</h1>
      <div className="form_detail">
        <p>
          <strong>Email:</strong> {worker.email}
        </p>
        <p>
          <strong>Číslo:</strong> {worker.phone}
        </p>
        <p>
          <strong>Poznámka:</strong> {worker.note}
        </p>
      </div>

      <form className="form" onSubmit={handleWageSubmit}>
        <h2>Zaevidovat vyplacení mzdy</h2>
        <div className="form-wages">
          <div className="form-group">
            <label htmlFor="wage-date">Datum:</label>
            <input
              type="date"
              id="wage-date"
              name="date"
              value={wageData.date}
              onChange={handleWageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="wage-note">Poznámka:</label>
            <input
              type="text"
              id="wage-note"
              name="note"
              value={wageData.note}
              onChange={handleWageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="wage-unit">Částka:</label>
            <input
              type="number"
              id="wage-unit"
              name="unit"
              value={wageData.unit}
              onChange={handleWageChange}
            />
          </div>
        </div>
        <button type="submit">Uložit</button>
      </form>
      <form>
        <div className="form" onSubmit={(e) => e.preventDefault()}>
          <h2>Mzda za období</h2>
          <div className="form-wages">
            <div className="form-group">
              <label htmlFor="start-date">Od:</label>
              <input type="date" id="start-date" name="start-date" />
            </div>
            <div className="form-group">
              <label htmlFor="end-date">Do:</label>
              <input type="date" id="end-date" name="end-date" />
            </div>
          </div>
          <div className="form-group" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="period-wages">
              <strong>Mzda za období:</strong>
            </label>
            <div className="readonly-cell" id="period-wages"></div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Datum</th>
                <th>Průměrná hodinová mzda v kč</th>
                <th>Celkem za den v kč</th>
                <th>Bonus</th>
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
        <div className="form">
          <h2>Vyplacené mzdy:</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Datum</th>
                <th>Částka v kč</th>
                <th>Poznámka</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="form-group">
            <label htmlFor="remaining-wages">
              <strong>Zbývá doplatit v kč:</strong>
            </label>
            <div className="readonly-cell" id="remaining-wages"></div>
          </div>
        </div>
      </form>
    </div>
  );
};
