import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchWorkerById,
  Worker,
} from '../../Components/ApiService/apiService';

export const WorkerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [worker, setWorker] = useState<Worker | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!worker) {
    return <div>Worker not found</div>;
  }
  console.log('worker:');
  console.log(worker);

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
      <h2>Zaevidovat vyplacení mzdy</h2>
      <form className="form">
        <div className="form-wages">
          <div className="form-group">
            <label htmlFor="date">Datum:</label>
            <input type="date" id="date" name="date" />
          </div>
          <div className="form-group">
            <label htmlFor="note">Poznámka:</label>
            <input type="text" id="note" name="note" />
          </div>

          <div className="form-group">
            <label htmlFor="unit">Částka:</label>
            <input type="number" id="unit" name="unit" />
          </div>
        </div>

        <button type="submit">Uložit</button>
      </form>
      <form>
        <div className="form">
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
          <div className="form-group">
            <label htmlFor="wages"><strong>Mzda za období:</strong></label>
            <div className="readonly-cell" id="wages"></div>
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
      </form>
    </div>
  );
};
