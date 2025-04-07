import React from 'react';

export const Avatar = ({ className, children }) => {
  return <div className={`avatar ${className}`}>{children}</div>;
};

export const AvatarImage = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`avatar-image ${className}`} />;
};

export const AvatarFallback = ({ children, className }) => {
  return <div className={`avatar-fallback ${className}`}>{children}</div>;
};