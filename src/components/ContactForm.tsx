import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the data to a server
    // For demo purposes, we'll just simulate a successful submission
    
    // Simulate form processing
    setFormStatus({ 
      submitted: true, 
      success: false,
      message: "Trimitere în curs..." 
    });

    // Simulate API response after 1.5 seconds
    setTimeout(() => {
      setFormStatus({ 
        submitted: true, 
        success: true, 
        message: "Mesajul a fost trimis cu succes. Vă vom contacta în curând." 
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-[#1a1a25]/60 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
      <h3 className="text-xl font-semibold text-white mb-6">Trimiteți-ne un mesaj</h3>
      
      {formStatus && (
        <div className={`mb-6 p-4 rounded ${formStatus.success ? 'bg-green-900/40 text-green-300' : 'bg-yellow-900/40 text-yellow-300'}`}>
          {formStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Nume complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#13131f] border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#13131f] border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#13131f] border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#13131f] border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
              required
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={formStatus?.submitted && !formStatus.success}
              className="w-full bg-[#4c1d36] hover:bg-[#3a1628] text-white font-semibold py-3 px-6 rounded transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Trimite mesajul
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;