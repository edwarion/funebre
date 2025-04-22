import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Sicriu Model Clasic',
    category: 'Sicrie',
    price: '1800 RON',
    image: 'https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp',
    link: '/produse/sicrie/clasic',
  },
  {
    id: 2,
    name: 'Coroană Trandafiri',
    category: 'Coroane',
    price: '450 RON',
    image: 'https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp',
    link: '/produse/coroane/trandafiri',
  },
  {
    id: 3,
    name: 'Cruce Marmură',
    category: 'Cruci',
    price: '950 RON',
    image: 'https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp',
    link: '/produse/cruci/marmura',
  },
  {
    id: 4,
    name: 'Jerba Funerară',
    category: 'Jerbe',
    price: '350 RON',
    image: 'https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp',
    link: '/produse/jerbe/funerara',
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Produse Funerare
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferim o gamă variată de produse necesare pentru serviciile funerare, 
            toate de calitate superioară și la prețuri accesibile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              link={product.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/produse" 
            className="inline-block bg-transparent hover:bg-[#4c1d36] text-white font-semibold px-8 py-3 rounded border border-white hover:border-[#4c1d36] transition-colors duration-300"
          >
            Vezi toate produsele
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;