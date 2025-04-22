import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1a1a1a] shadow-md py-2'
          : 'bg-black/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white text-2xl font-serif">
            Funebre<span className="text-yellow-500">24</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">Acasă</Link>
          <Link href="/despre-noi">Despre noi</Link>
          <Link href="/servicii">Servicii</Link>
          <Link href="/produse">Produse</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Emergency Contact */}
        <div className="hidden md:flex items-center">
          <div className="bg-[#4c1d36] rounded-full p-2 mr-2">
            <PhoneCall className="text-yellow-500 h-4 w-4" />
          </div>
          <div>
            <p className="text-gray-400 text-xs">URGENȚE 24/7</p>
            <a href="tel:0722123456" className="text-white font-bold">
            0726.435.890
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a1a1a] px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              Acasă
            </Link>
            <Link href="/despre-noi" onClick={() => setMobileMenuOpen(false)}>
              Despre noi
            </Link>
            <Link href="/servicii" onClick={() => setMobileMenuOpen(false)}>
              Servicii
            </Link>
            <Link href="/produse" onClick={() => setMobileMenuOpen(false)}>
              Produse
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>
          <div className="flex items-center mt-4 pt-4 border-t border-gray-700">
            <div className="bg-[#4c1d36] rounded-full p-2 mr-2">
              <PhoneCall className="text-yellow-500 h-4 w-4" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">URGENȚE 24/7</p>
              <a href="tel:0722123456" className="text-white font-bold">
                0722.123.456
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;