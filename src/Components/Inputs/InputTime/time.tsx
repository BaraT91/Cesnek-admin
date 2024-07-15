import React from 'react';

export const Time: React.FC = () => (
  <div className="form-group">
    <label htmlFor="time">Čas:</label>
    <input type="time" id="time" name="time" />
  </div>
);
