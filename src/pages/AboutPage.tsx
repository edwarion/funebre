import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-8 text-center">Despre Noi</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Cu o experiență de peste 15 ani în domeniul serviciilor funerare, Funebre24 s-a remarcat prin profesionalismul, 
              empatia și respectul cu care tratează fiecare familie în parte. Înțelegem că pierderea unei persoane dragi este 
              unul dintre cele mai dificile momente din viață, de aceea suntem aici pentru a vă oferi sprijin și îndrumare 
              în această perioadă delicată.
            </p>

            <h2 className="text-2xl font-serif text-white mt-12 mb-4">Misiunea Noastră</h2>
            <p className="text-gray-300 mb-6">
              Ne-am asumat misiunea de a oferi servicii funerare de cea mai înaltă calitate, tratând fiecare ceremonie cu 
              demnitatea și respectul cuvenit. Echipa noastră de profesioniști este pregătită să vă asiste 24/7, oferind 
              suport complet în organizarea serviciilor funerare.
            </p>

            <h2 className="text-2xl font-serif text-white mt-12 mb-4">Valorile Noastre</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-3 mb-6">
              <li>Respect și demnitate în toate serviciile oferite</li>
              <li>Transparență și onestitate în relația cu familiile</li>
              <li>Profesionalism și atenție la detalii</li>
              <li>Disponibilitate 24/7 pentru situații de urgență</li>
              <li>Empatie și înțelegere în momentele dificile</li>
            </ul>

            <h2 className="text-2xl font-serif text-white mt-12 mb-4">Echipa Noastră</h2>
            <p className="text-gray-300 mb-6">
              Personalul nostru este format din profesioniști cu experiență în domeniul serviciilor funerare, pregătiți să 
              ofere asistență și suport în orice situație. Fiecare membru al echipei este dedicat să vă ajute să organizați 
              o ceremonie demnă pentru cel drag.
            </p>

            <h2 className="text-2xl font-serif text-white mt-12 mb-4">Facilități și Resurse</h2>
            <p className="text-gray-300 mb-6">
              Dispunem de o infrastructură completă și modernă, incluzând:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-3 mb-6">
              <li>Flotă proprie de mașini funerare</li>
              <li>Capelă pentru ceremonii</li>
              <li>Spații de pregătire și îmbălsămare</li>
              <li>Showroom pentru produse funerare</li>
              <li>Birouri pentru consiliere și asistență</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;