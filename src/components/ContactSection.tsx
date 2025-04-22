import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Contactați-ne</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Suntem disponibili 24/7 pentru a răspunde întrebărilor și nevoilor dumneavoastră.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-6xl w-full">

            <div className="flex flex-wrap justify-center gap-6">
              {/* Adresă */}
              <div className="flex items-start w-full sm:w-[48%] lg:w-[23%]">
                <div className="bg-[#1e1e2d] p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Adresă</h4>
                  <p className="text-gray-400">Strada Berzei 67, Târgoviște</p>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-start w-full sm:w-[48%] lg:w-[23%]">
                <div className="bg-[#1e1e2d] p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Telefon</h4>
                  <p className="text-gray-400">
                    <a href="tel:0722123456" className="hover:text-white transition-colors">
                      0722.123.456
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start w-full sm:w-[48%] lg:w-[23%]">
                <div className="bg-[#1e1e2d] p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-400">
                    <a href="mailto:contact@funebre24.ro" className="hover:text-white transition-colors">
                      contact@funebre24.ro
                    </a>
                  </p>
                </div>
              </div>

              {/* Program */}
              <div className="flex items-start w-full sm:w-[48%] lg:w-[23%]">
                <div className="bg-[#1e1e2d] p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Program</h4>
                  <p className="text-gray-400">Disponibili 24/7, 365 zile pe an</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
