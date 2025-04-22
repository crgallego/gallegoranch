import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../stripe-config';

const Products: React.FC = () => {
  const products = getProducts();

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

  const culinaryProducts = products.filter(product => product.category === 'culinary');
  const skincareProducts = products.filter(product => product.category === 'skincare');

  return (
    <section id="products" className="section-padding bg-clay/5">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Premium Products</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Nutrient-dense, 100% grass-fed beef tallow, carefully rendered in small batches 
            for optimal flavor, nutrition, and versatility.
          </p>
        </div>
        
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-8 animate-fade-in">
            <h3 className="text-2xl font-display font-semibold">Culinary Collection</h3>
            <div className="flex-grow h-px bg-clay/20"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {culinaryProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in" style={{ transitionDelay: `${index * 150}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        
        {skincareProducts.length > 0 && (
          <div>
            <div className="flex items-center space-x-4 mb-8 animate-fade-in">
              <h3 className="text-2xl font-display font-semibold">Skincare Essentials</h3>
              <div className="flex-grow h-px bg-clay/20"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {skincareProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ transitionDelay: `${index * 150}ms` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;