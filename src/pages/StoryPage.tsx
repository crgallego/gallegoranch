import React, { useEffect } from 'react';
import { Leaf, Heart, Sun, Droplets } from 'lucide-react';

const StoryPage: React.FC = () => {
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
    <div className="pt-20">
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Gallego Ranch landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream mb-4 animate-fade-in">
              Our Story
            </h1>
            <p className="text-lg text-cream/90 max-w-2xl mx-auto animate-fade-in" style={{transitionDelay: '150ms'}}>
              A legacy of tradition, quality, and sustainable ranching
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <h2 className="text-3xl font-display font-bold mb-6 animate-fade-in">
              🌾 Gallego Ranch Tallow: A Family Tradition Reborn
            </h2>
            
            <p className="text-lg text-charcoal/80 mb-8 animate-fade-in">
              Before "clean eating" was a movement, before "natural skincare" was trending, there were families like ours—out on the land, raising cattle, rendering fat, and using every part of the animal not just out of necessity, but out of respect.
            </p>

            <p className="text-xl font-display font-semibold text-clay mb-8 animate-fade-in">
              Gallego Ranch Tallow was born from that legacy.
            </p>

            <p className="text-lg text-charcoal/80 mb-8 animate-fade-in">
              For generations, the Gallego name has been tied to hard work, honest living, and a reverence for tradition. Our roots trace back to the rugged ranchlands of California, where early mornings, dusty boots, and pasture-raised cattle were just part of life. While a lot has changed since then, our values haven't.
            </p>

            <div className="bg-cream p-8 rounded-lg shadow-sm border border-clay/10 mb-12 animate-fade-in">
              <h3 className="font-display font-semibold text-xl mb-4">We started Gallego Ranch Tallow with a simple mission:</h3>
              <p className="text-lg italic text-charcoal/80">
                to bring back the nutrient-rich, time-honored fat our grandparents used for everything from cooking Sunday dinners to healing chapped hands.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-sage/5 p-6 rounded-lg animate-fade-in">
                <div className="flex items-start mb-4">
                  <div className="bg-sage/10 p-2 rounded-md mr-3">
                    <Leaf className="h-5 w-5 text-sage" />
                  </div>
                  <h4 className="font-semibold">Regenerative Practices</h4>
                </div>
                <p className="text-charcoal/70">
                  100% grass-fed beef, sourced from ranchers who care as much about the land as they do the livestock.
                </p>
              </div>
              
              <div className="bg-sage/5 p-6 rounded-lg animate-fade-in">
                <div className="flex items-start mb-4">
                  <div className="bg-sage/10 p-2 rounded-md mr-3">
                    <Heart className="h-5 w-5 text-sage" />
                  </div>
                  <h4 className="font-semibold">Traditional Methods</h4>
                </div>
                <p className="text-charcoal/70">
                  Rendered in small batches using time-honored techniques passed down through generations.
                </p>
              </div>
            </div>

            <p className="text-lg text-charcoal/80 mb-8 animate-fade-in">
              This isn't factory fat. It's rendered in small batches from 100% grass-fed beef, sourced from ranchers who care as much about the land as they do the livestock. No shortcuts. No additives. Just real, ancestral nutrition in its purest form.
            </p>

            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <img 
                src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Ranch landscape"
                className="rounded-lg shadow-md animate-fade-in"
              />
              <img 
                src="https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Traditional tallow making"
                className="rounded-lg shadow-md animate-fade-in"
              />
            </div>

            <p className="text-xl font-display font-semibold mb-4 animate-fade-in">
              And we didn't stop at the kitchen.
            </p>

            <p className="text-lg text-charcoal/80 mb-8 animate-fade-in">
              Our grandmother used to keep a jar of tallow by the stove and by the bed—one for the skillet, one for the skin. We're proud to honor that versatility with products that nourish from the inside out.
            </p>

            <p className="text-lg text-charcoal/80 mb-12 animate-fade-in">
              Whether you're searing steaks or soothing skin, Gallego Ranch Tallow is a return to the good stuff—slow, simple, and strong. Just like the people who made us.
            </p>

            <div className="bg-clay/5 p-8 rounded-lg text-center mb-12 animate-fade-in">
              <h3 className="font-display font-bold text-2xl mb-4">Welcome to the ranch.</h3>
              <p className="text-xl text-clay">We're glad you're here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;