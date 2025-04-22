import React from 'react';
import { Instagram, Facebook, Twitter, Beef } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <Beef className="h-8 w-8 text-clay mr-2" />
              <span className="font-display text-xl font-semibold text-cream">Gallego Ranch</span>
            </div>
            <p className="text-sm max-w-xs">
              Premium, all-natural beef tallow products inspired by tradition, purity, 
              and regenerative values.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream/60 hover:text-cream transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-cream transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-cream transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-cream">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream/60 hover:text-cream transition-colors">Home</a></li>
              <li><a href="#products" className="text-cream/60 hover:text-cream transition-colors">Our Products</a></li>
              <li><a href="#story" className="text-cream/60 hover:text-cream transition-colors">Our Story</a></li>
              <li><a href="#" className="text-cream/60 hover:text-cream transition-colors">Blog</a></li>
              <li><a href="#" className="text-cream/60 hover:text-cream transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-cream">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream/60 hover:text-cream transition-colors">Culinary Tallow</a></li>
              <li><a href="#" className="text-cream/60 hover:text-cream transition-colors">Tallow Balm</a></li>
              <li><a href="#" className="text-cream/60 hover:text-cream transition-colors">Tallow Sticks</a></li>
              <li><a href="#" className="text-cream/60 hover:text-cream transition-colors">Cooking Bricks</a></li>
              <li><a href="#" className="text-cream/60 hover:text-cream transition-colors">Gift Sets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-cream">Contact</h4>
            <address className="not-italic">
              <p>Gallego Family Ranch</p>
              <p>1234 Pasture Lane</p>
              <p>Grasslands, CO 80123</p>
              <p className="mt-2">info@gallegoranch.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {currentYear} Gallego Ranch Tallow. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-cream/60 hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="text-cream/60 hover:text-cream transition-colors">Terms of Service</a>
            <a href="#" className="text-cream/60 hover:text-cream transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;