import React from 'react';

export const UnitPrice: React.FC = () => (
  <div className="form-group">
    <label htmlFor="unitPrice">Částka za jednotku v kč:</label>
    <input type="number" id="unitPrice" name="unitPrice" />
  </div>
);
