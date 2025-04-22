import React from 'react';
import { Cross, Truck, FileText, Globe, HeartHandshake, BookOpenCheck } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Servicii Funerare Complete',
      description: 'Organizăm întregul proces funerar cu respect și demnitate, conform dorințelor familiei.',
      icon: <Cross className="w-10 h-10 text-yellow-500" />,
      link: '/servicii/pompe-funebre'
    },
    {
      id: 2,
      title: 'Transport Funerar',
      description: 'Asigurăm transport specializat pe teritoriul României și în străinătate, respectând toate normele.',
      icon: <Truck className="w-10 h-10 text-yellow-500" />,
      link: '/servicii/transport-funerar'
    },
    {
      id: 3,
      title: 'Întocmire Acte',
      description: 'Vă ajutăm cu toate documentele necesare și formalitățile legale pentru înmormântare.',
      icon: <FileText className="w-10 h-10 text-yellow-500" />,
      link: '/servicii/intocmire-acte'
    },
    {
      id: 4,
      title: 'Repatriere',
      description: 'Oferim servicii complete de repatriere internațională pentru persoanele decedate în străinătate.',
      icon: <Globe className="w-10 h-10 text-yellow-500" />,
      link: '/servicii/repatriere'
    },
    {
      id: 5,
      title: 'Asistență Completă',
      description: 'Suntem alături de dumneavoastră cu empatie și profesionalism în fiecare etapă.',
      icon: <HeartHandshake className="w-10 h-10 text-yellow-500" />,
      link: '/servicii/asistenta'
    },
    {
      id: 6,
      title: 'Consiliere',
      description: 'Oferim îndrumare și sprijin în luarea deciziilor corecte pentru ceremonia de înmormântare.',
      icon: <BookOpenCheck className="w-10 h-10 text-yellow-500" />,
      link: '/servicii/consiliere'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#000000] to-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Serviciile Noastre</h2>
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

        <div className="text-center mt-12">
          <a 
            href="/servicii" 
            className="inline-block bg-[#0f0f17] hover:bg-[#3a1628] text-white font-semibold px-8 py-3 rounded transition-colors duration-300"
          >
            Vezi toate serviciile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;