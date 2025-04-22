import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 bg-cream bg-grain-pattern"
      style={{ backgroundBlendMode: 'soft-light' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-clay/10 to-transparent"></div>
      <div className="container-custom z-10 pt-10 md:pt-0">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="text-sage font-medium tracking-wide animate-fade-in">PURE FUEL FROM THE RANCH</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-2 mb-4 leading-tight animate-fade-in" style={{transitionDelay: '150ms'}}>
              Rooted in Tradition. <br />
              <span className="text-clay">Raised for Tomorrow.</span>
            </h1>
            <p className="text-lg text-charcoal/80 mb-8 max-w-md animate-fade-in" style={{transitionDelay: '300ms'}}>
              Premium, all-natural beef tallow products inspired by tradition, purity, 
              and regenerative values from our family ranch to your table.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{transitionDelay: '450ms'}}>
              <a href="#products" className="btn-primary">
                Shop Products
              </a>
              <a href="#story" className="btn-outline">
                Our Story
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in relative" style={{transitionDelay: '600ms'}}>
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-clay/5 rounded-full filter blur-3xl transform scale-110"></div>
              <img 
                src="/01 Amber Glass Mason Jar GR Tallow.png"
                alt="Gallego Ranch Tallow Product"
                className="relative w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#products" aria-label="Scroll down">
          <ArrowDownCircle className="h-10 w-10 text-clay/70 hover:text-clay transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default Hero;