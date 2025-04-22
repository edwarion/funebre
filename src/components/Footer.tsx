import React from 'react';
import { Link } from './Link';
import { MapPin, Mail, Phone, Clock, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-serif mb-4">
              Funebre<span className="text-yellow-500">24</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Oferim servicii funerare complete cu respect și demnitate. Disponibili 24/7 pentru a vă sprijini în momentele dificile.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicii</h3>
            <ul className="space-y-2">
              <li><Link href="/servicii/pompe-funebre">Pompe funebre</Link></li>
              <li><Link href="/servicii/transport-funerar">Transport funerar</Link></li>
              <li><Link href="/servicii/sicrie">Sicrie și accesorii</Link></li>
              <li><Link href="/servicii/imbalsamare">Îmbălsămare</Link></li>
              <li><Link href="/servicii/repatriere">Repatriere</Link></li>
              <li><Link href="/servicii/coroane">Coroane și jerbe</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                <span className="text-gray-400">Strada Berzei 67, Târgoviște</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-500 mr-2" />
                <a href="tel:0726435890" className="text-gray-400 hover:text-white transition-colors">0726.435.890 </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-500 mr-2" />
                <a href="mailto:contact@funebre24.ro" className="text-gray-400 hover:text-white transition-colors">contact@funebre24.ro</a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-gray-400">Disponibil 24/7</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link-uri utile</h3>
            <ul className="space-y-2">
              <li><Link href="/termeni-si-conditii">Termeni și condiții</Link></li>
              <li><Link href="/politica-de-confidentialitate">Politica de confidențialitate</Link></li>
              <li><Link href="/decontare-casa-pensii">Decontare Casa de Pensii</Link></li>
              <li><Link href="/acte-necesare">Acte necesare</Link></li>
              <li><Link href="/intrebari-frecvente">Întrebări frecvente</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Funebre24. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;