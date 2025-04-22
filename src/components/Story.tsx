import React, { useEffect } from 'react';
import { Leaf, Shield, Utensils, Wind } from 'lucide-react';

const Story: React.FC = () => {
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
    <section id="story" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
              <img 
                src="https://images.pexels.com/photos/2100942/pexels-photo-2100942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Gallego Ranch" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div>
            <p className="text-sage font-medium tracking-wide mb-2 animate-fade-in">OUR HERITAGE</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-in" style={{transitionDelay: '150ms'}}>
              A Return to Nutrient-Dense, <span className="text-clay">Sustainable Living</span>
            </h2>
            
            <p className="text-charcoal/80 mb-6 animate-fade-in" style={{transitionDelay: '300ms'}}>
              For five generations, the Gallego family has nurtured our land using time-honored practices that work with nature, not against it. Our cattle graze on diverse, nutrient-rich pastures, living as nature intended.
            </p>
            
            <p className="text-charcoal/80 mb-8 animate-fade-in" style={{transitionDelay: '450ms'}}>
              We don't cut corners. Just clean cuts of beef. Our small-batch tallow is carefully rendered to preserve its natural goodness – a tradition passed down through our family that we're proud to share with yours.
            </p>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{transitionDelay: '600ms'}}>
              <div className="flex items-start">
                <div className="mr-3 bg-sage/10 p-2 rounded-md">
                  <Leaf className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Regenerative</h3>
                  <p className="text-sm text-charcoal/70">Land-healing practices</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 bg-sage/10 p-2 rounded-md">
                  <Shield className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">100% Natural</h3>
                  <p className="text-sm text-charcoal/70">No additives or fillers</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 bg-sage/10 p-2 rounded-md">
                  <Utensils className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Nutrient-Rich</h3>
                  <p className="text-sm text-charcoal/70">Vitamins A, D, E & K</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 bg-sage/10 p-2 rounded-md">
                  <Wind className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Slow-Rendered</h3>
                  <p className="text-sm text-charcoal/70">Traditional methods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;