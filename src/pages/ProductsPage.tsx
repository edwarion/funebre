import React from 'react';
import ProductCard from '../components/ProductCard';

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
  {
    id: 5,
    name: 'Sicriu Premium',
    category: 'Sicrie',
    price: '2500 RON',
    image: 'https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp',
    link: '/produse/sicrie/premium',
  },
  {
    id: 6,
    name: 'Coroană Crizanteme',
    category: 'Coroane',
    price: '380 RON',
    image: 'https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp',
    link: '/produse/coroane/crizanteme',
  },
  {
    id: 7,
    name: 'Cruce Granit',
    category: 'Cruci',
    price: '1200 RON',
    image: 'https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp',
    link: '/produse/cruci/granit',
  },
  {
    id: 8,
    name: 'Jerba Specială',
    category: 'Jerbe',
    price: '420 RON',
    image: 'https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp',
    link: '/produse/jerbe/speciala',
  }
];

const ProductsPage: React.FC = () => {
  return (
    <div className="pt-24 bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Produse Funerare
          </h1>
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
      </div>
    </div>
  );
};

export default ProductsPage;