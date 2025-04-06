import React from 'react';

export const Label = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={`label ${className}`}>
      {children}
    </label>
  );
};