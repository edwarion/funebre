import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProductsSection from '../components/ProductsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;