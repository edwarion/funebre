import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link 
}) => {
  return (
    <div className="bg-[#0a0a0a]/60 hover:bg-[#0f0f0f] backdrop-blur-sm border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1">
      <div className="mb-4">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      
      <p className="text-gray-400 mb-4">{description}</p>
      
      <a 
        href={link} 
        className="inline-flex items-center text-yellow-500 hover:text-yellow-400 font-medium transition-colors"
      >
        Află mai multe
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </a>
    </div>
  );
};

export default ServiceCard;