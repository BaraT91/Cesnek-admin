import React from 'react';
import { Worker } from '../../ApiService/apiService';

interface EditWorkerProps {
  worker: Worker;
}

const EditWorker: React.FC<EditWorkerProps> = ({ worker }) => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="worker-name">Jméno:</label>
          <input type="text" id="worker-name" name="name" defaultValue={worker.name} />
        </div>
        <div className="form-group">
          <label htmlFor="worker-email">Email:</label>
          <input type="email" id="worker-email" name="email" defaultValue={worker.email} />
        </div>
        <div className="form-group">
          <label htmlFor="worker-number">Číslo:</label>
          <input type="text" id="worker-number" name="number" defaultValue={worker.phone} />
        </div>
        <div className="form-group">
          <label htmlFor="worker-note">Poznámka:</label>
          <input type="text" id="worker-note" name="name" defaultValue={worker.note} />
        </div>
        <button type="submit">Uložit</button>
      </form>
    </div>
  );
};

export default EditWorker;
