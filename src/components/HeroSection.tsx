import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://funebre24.ro/wp-content/uploads/2022/07/75f22bac-3bdf-4893-b5ff-73ea2c9f47aa-1024x576.jpg" 
          alt="Servicii funerare" 
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-4">
            Servicii funerare <br className="hidden md:block" /> 
            <span className="text-yellow-500">cu demnitate și respect</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Suntem alături de dumneavoastră în momentele dificile, oferind sprijin și asistență completă 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="tel:0726435890" 
              className="bg-[#4c1d36] hover:bg-[#3a1628] text-white font-semibold px-8 py-3 rounded transition-colors duration-300"
            >
              Apelați acum
            </a>
            <a 
              href="/servicii" 
              className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-3 rounded border border-white transition-colors duration-300"
            >
              Serviciile noastre
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;