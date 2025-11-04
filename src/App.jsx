import React, { useState } from 'react';
import { MapPin, Users, Camera, Send, Menu, X, Instagram, Twitter, Facebook } from 'lucide-react';

/*
--------------------------------------------------------------------------------
PROUDLY LAIKIPIAN TRAVELS - MODERN REACT WEBSITE
--------------------------------------------------------------------------------
This is the main application file.

- FRAMEWORK: React
- STYLING: Tailwind CSS
- ICONS: Lucide-React
--------------------------------------------------------------------------------
*/

// --- 1. Navbar Component ---
const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - Using placeholder, replace with 4.jpg */}
        <a href="#home" className="flex items-center space-x-2">
          <img 
            src="https://placehold.co/150x50/0047AB/FFFFFF?text=Proudly+Laikipian&font=inter"
            alt="Proudly Laikipian Logo (4.jpg)"
            className="h-10 w-auto rounded"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x50/0047AB/FFFFFF?text=Logo+Error'; }}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium text-gray-700 hover:text-brand-blue transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-orange text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium text-gray-700 hover:text-brand-blue text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-orange text-white text-center font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- 2. Hero Component ---
const Hero = () => {
  const heroImageUrl = "/hero-background.png.png";
  
  return (
    <section 
      id="home"
      className="h-screen min-h-[700px] flex items-center justify-center text-white relative"
    >
      {/* Background Image - Replace with 12.png */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImageUrl})`,
          backgroundAttachment: 'fixed' // Parallax-like effect
        }}
      >
        {/* Image Overlay (for contrast) */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight shadow-text">
          Find Your Escape
        </h1>
        <p className="font-light text-xl md:text-2xl mb-8 shadow-text">
          Curated Kenyan adventures by Mukuhi Wanjohi.
        </p>
        <a
          href="#services"
          className="bg-brand-orange text-white font-semibold text-lg px-8 py-4 rounded-full shadow-xl hover:bg-opacity-90 transform hover:-translate-y-1 transition-all duration-300"
        >
          Explore Our Trips
        </a>
      </div>
    </section>
  );
};

// --- 3. About Component ---
const About = () => {
  // Replace with client's actual portrait
  const portraitUrl = "https://placehold.co/600x600/E2E8F0/4A5568?text=Kuhia's+Portrait";

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* About Image - Client's Portrait */}
          <div className="w-full md:w-2/5">
            <img
              src={portraitUrl}
              alt="Mukuhi Wanjohi"
              className="rounded-xl shadow-2xl object-cover w-full h-auto aspect-square"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x600/E2E8F0/4A5568?text=Placeholder'; }}
            />
          </div>

          {/* About Content - From WordPress */}
          <div className="w-full md:w-3/5">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a202c] mb-6">
              Hi, I'm Mukuhi Wanjohi
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              I'm a Kenyan traveller, photographer, and storyteller with a deep passion
              for nature, hiking, and wildlife.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My mission with <span className="font-semibold text-brand-blue">Proudly Laikipian</span> is to
              guide you to off-the-beaten-path destinations. I curate authentic
              experiences that let you discover Kenya's diverse landscapes,
              rich cultures, and untamed beauty, all documented through my lens.
            </p>
            <a
              href="#gallery"
              className="text-brand-orange font-semibold text-lg hover:underline"
            >
              See My Adventures &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 4. Services Component ---
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="mb-6">
      <div className="bg-brand-blue text-white w-16 h-16 rounded-full flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <MapPin size={32} />,
      title: 'Bespoke Itineraries',
      description: 'Custom-planned trips designed around your interests, timeline, and budget, from luxury lodges to rugged camps.'
    },
    {
      icon: <Users size={32} />,
      title: 'Group Expeditions',
      description: 'Join a curated group of like-minded adventurers on a set-departure trip to Kenya\'s most iconic and hidden gems.'
    },
    {
      icon: <Camera size={32} />,
      title: 'Photography Tours',
      description: 'As a photographer, I lead special tours focused on capturing the best light, wildlife, and landscapes.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How I Can Help</h2>
          <p className="text-lg text-gray-700">
            From solo journeys to group adventures, I provide authentic,
            hassle-free travel experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 5. Gallery Component ---
const Gallery = () => {
  const images = [
    { src: "https://placehold.co/600x400/4A5568/FFFFFF?text=5.png+(Sunset)", alt: "Sunset sundowner (5.png)", span: "col-span-1 md:col-span-2" },
    { src: "https://placehold.co/600x400/4A5568/FFFFFF?text=10.png+(Hiker)", alt: "Hiker in vast landscape (10.png)", span: "col-span-1" },
    { src: "https://placehold.co/600x400/4A5568/FFFFFF?text=6.png+(Luxury+Bath)", alt: "Luxury lodge bathtub (6.png)", span: "col-span-1" },
    { src: "https://placehold.co/600x400/4A5568/FFFFFF?text=7.png+(Camp+Bed)", alt: "Glamping tent interior (7.png)", span: "col-span-1" },
    { src: "https://placehold.co/600x400/4A5568/FFFFFF?text=4.png+(Pool+View)", alt: "Pool overlooking landscape (4.png)", span: "col-span-1 md:col-span-2" },
    { src: "https://placehold.co/600x400/4A5568/FFFFFF?text=8.png+(Crane)", alt: "Crested crane (8.png)", span: "col-span-1" },
    { src: "https://placehold.co/600x400/4A5568/FFFFFF?text=9.png+(Mountain)", alt: "Malaso, Maralal landscape (9.png)", span: "col-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">From My Lens</h2>
          <p className="text-lg text-gray-700">
            A glimpse into the moments and memories I help create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className={`overflow-hidden rounded-xl shadow-lg ${img.span}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-[3/2] transform hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/E2E8F0/4A5568?text=Image+Error'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 6. Contact Form Component ---
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Plan Your Adventure
            </h2>
            <p className="text-lg text-gray-700">
              Have a question or ready to start planning? Send me a message.
            </p>
          </div>
          
          <form
            className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-xl"
            onSubmit={(e) => e.preventDefault()} // Basic submit prevention
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                placeholder="Tell me about your dream trip..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-brand-orange text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center mx-auto"
              >
                Send Message <Send size={20} className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// --- 7. Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-[#1a202c] text-gray-400 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            {/* Logo Placeholder */}
            <a href="#home">
              <img 
                src="https://placehold.co/200x60/1a202c/FFFFFF?text=Proudly+Laikipian&font=inter"
                alt="Proudly Laikipian Logo (4.jpg)"
                className="h-12 w-auto rounded mx-auto md:mx-0"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x60/1a202c/FFFFFF?text=Logo+Error'; }}
              />
            </a>
            <p className="mt-4 max-w-sm mx-auto md:mx-0">
              Curating authentic Kenyan travel experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-6">
              <a href="#" className="hover:text-white transition-colors duration-300" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Proudly Laikipian Travels. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};


// --- 8. Main App Component ---
// Assembles the entire page.
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-gray-800">
      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}