import React from 'react';

export const TotaAmount: React.FC = () => (
  <div className="form-group">
    <label htmlFor="totalAmount">Celková částka v kč:</label>
    <input type="number" id="totalAmount" name="totalAmount" />
  </div>
);
