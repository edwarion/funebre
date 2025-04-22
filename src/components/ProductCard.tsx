import React from 'react';

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  category,
  price,
  image,
  link,
}) => {
  return (
    <a 
      href={link}
      className="group relative block overflow-hidden rounded-lg bg-[#0a0a0a] transition-all duration-300 hover:shadow-xl"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4">
        <span className="inline-block text-xs font-medium text-yellow-500 mb-1">
          {category}
        </span>
        
        <h3 className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors">
          {name}
        </h3>
        
        <div className="mt-2 flex items-center justify-between">
          <p className="text-gray-400">
            <span className="text-white font-medium">{price}</span>
          </p>
          
          <div className="rounded-full bg-[#0d0d0d] p-2 text-white shadow-sm">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;