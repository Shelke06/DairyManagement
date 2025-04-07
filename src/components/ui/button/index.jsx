import React from 'react';

export const Tabs = ({ children, defaultValue, className }) => {
  return <div className={`tabs ${className}`}>{children}</div>;
};

export const TabsList = ({ children, className }) => {
  return <div className={`tabs-list ${className}`}>{children}</div>;
};

export const TabsTrigger = ({ children, value, className }) => {
  return (
    <button className={`tabs-trigger ${className}`} data-value={value}>
      {children}
    </button>
  );
};

export const TabsContent = ({ children, value, className }) => {
  return (
    <div className={`tabs-content ${className}`} data-value={value}>
      {children}
    </div>
  );
};

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
};