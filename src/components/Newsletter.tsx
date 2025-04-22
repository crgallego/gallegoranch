import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would connect to an email service
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-20 bg-sage/10">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-4">
            Join the Gallego Ranch Family
          </h2>
          <p className="text-charcoal/70 mb-8">
            Subscribe to receive updates on new products, special offers, and traditional wisdom 
            from our ranch to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-3 rounded border border-clay/20 focus:outline-none focus:ring-2 focus:ring-clay/50"
            />
            <button 
              type="submit"
              className="btn-primary flex items-center justify-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Subscribe
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-4 text-sage font-medium animate-fade-in">
              Thank you for subscribing! We'll be in touch soon.
            </div>
          )}
          
          <p className="text-xs text-charcoal/50 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;