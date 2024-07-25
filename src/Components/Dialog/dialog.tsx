import React, { ReactNode } from 'react';
import './dialog.css';

interface DialogProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ show, onClose, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="dialog-backdrop">
      <div className="dialog">
        <div className="dialog-header">
          <h3>{title}</h3>
          <button onClick={onClose} className="close-button">&times;</button>
        </div>
        <div className="dialog-content">
          {children}
        </div>
        <div className="dialog-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
