import React from 'react';
import { Cross, Truck, FileText, Globe, HeartHandshake, BookOpenCheck } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Servicii Funerare Complete',
      description: 'Organizăm întregul proces funerar cu respect și demnitate, conform dorințelor familiei. Oferim asistență completă pentru toate aspectele ceremoniei.',
      icon: <Cross className="w-10 h-10 text-yellow-500" />,
      link: '/servicii/pompe-funebre'
    },
    {
      id: 2,
      title: 'Transport Funerar',
      description: 'Asigurăm transport specializat pe teritoriul României și în străinătate, respectând toate normele. Flota noastră este dotată cu toate echipamentele necesare.',
      icon: <Truck className="w-10 h-10 text-yellow-500" />,
      link: '/servicii/transport-funerar'
    },
    {
      id: 3,
      title: 'Întocmire Acte',
      description: 'Vă ajutăm cu toate documentele necesare și formalitățile legale pentru înmormântare. Preluăm întreaga birocrație pentru a vă ușura procesul.',
      icon: <FileText className="w-10 h-10 text-yellow-500" />,
      link: '/servicii/intocmire-acte'
    },
    {
      id: 4,
      title: 'Repatriere',
      description: 'Oferim servicii complete de repatriere internațională pentru persoanele decedate în străinătate. Ne ocupăm de toate aspectele legale și logistice.',
      icon: <Globe className="w-10 h-10 text-yellow-500" />,
      link: '/servicii/repatriere'
    },
    {
      id: 5,
      title: 'Asistență Completă',
      description: 'Suntem alături de dumneavoastră cu empatie și profesionalism în fiecare etapă. Oferim suport 24/7 pentru toate nevoile dumneavoastră.',
      icon: <HeartHandshake className="w-10 h-10 text-yellow-500" />,
      link: '/servicii/asistenta'
    },
    {
      id: 6,
      title: 'Consiliere',
      description: 'Oferim îndrumare și sprijin în luarea deciziilor corecte pentru ceremonia de înmormântare. Vă ajutăm să organizați o ceremonie demnă.',
      icon: <BookOpenCheck className="w-10 h-10 text-yellow-500" />,
      link: '/servicii/consiliere'
    }
  ];

  return (
    <div className="pt-24 bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Serviciile Noastre</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferim o gamă completă de servicii funerare pentru a vă ajuta în momentele dificile, 
            cu profesionalism și respect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;