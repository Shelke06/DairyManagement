import React from 'react';
import './Switch.css'; // Corrected the path

export const Switch = ({ id, checked, onChange, className }) => {
  return (
    <label htmlFor={id} className={`switch ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="switch-input"
      />
      <span className="switch-slider"></span>
    </label>
  );
};