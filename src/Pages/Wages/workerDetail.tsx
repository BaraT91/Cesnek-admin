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
      <p>Email: {worker.email}</p>
      <p>Phone: {worker.phone}</p>
      <p>Note: {worker.note}</p>
    </div>
  );
};
