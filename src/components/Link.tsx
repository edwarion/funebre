import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  className = '', 
  children, 
  onClick 
}) => {
  const baseClasses = "text-white hover:text-yellow-500 transition-colors duration-300";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;
  
  return (
    <a href={href} className={combinedClasses} onClick={onClick}>
      {children}
    </a>
  );
};