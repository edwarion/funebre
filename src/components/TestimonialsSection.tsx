import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  date: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, date }) => {
  return (
    <div className="bg-[#0f0f0f]/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
      <Quote className="h-8 w-8 text-yellow-500 opacity-50 mb-4" />
      <p className="text-gray-300 italic mb-6">{quote}</p>
      <div>
        <p className="text-white font-medium">{author}</p>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "În momentele dificile prin care am trecut, personalul de la Funebre24 a fost extraordinar. Au fost empatici, respectuoși și ne-au ghidat prin tot procesul cu mare profesionalism.",
      author: "Familia Popescu",
      date: "Octombrie 2023"
    },
    {
      id: 2,
      quote: "Mulțumim echipei pentru sprijinul și răbdarea acordată. Serviciile au fost impecabile, iar prețurile corecte și transparente. Recomand cu încredere.",
      author: "Ana Ionescu",
      date: "Martie 2024"
    },
    {
      id: 3,
      quote: "Promptitudinea și profesionalismul echipei Funebre24 ne-au impresionat. Au preluat toată organizarea înmormântării, permițându-ne să ne concentrăm pe durerea noastră.",
      author: "Mihai Dumitrescu",
      date: "Ianuarie 2024"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0d0d0d] to-[#0f0f0f] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Ce Spun Familiile</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empatia și profesionalismul nostru reflectate în experiențele familiilor care ne-au ales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <Testimonial
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              date={testimonial.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;