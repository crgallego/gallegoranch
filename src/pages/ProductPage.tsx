import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Star, Shield, Leaf } from 'lucide-react';
import { getProducts } from '../stripe-config';
import CheckoutButton from '../components/CheckoutButton';
import { STRIPE_PRODUCTS } from '../stripe-config';

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  const products = getProducts();
  const product = products.find(p => p.id === Number(id));
  const stripeProduct = Object.values(STRIPE_PRODUCTS).find(
    (p) => p.name === product?.name
  );
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Product Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="container-custom py-12">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-clay hover:text-clay/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            {product.badge && (
              <span className="inline-block bg-clay/90 text-cream px-3 py-1 rounded-full text-sm font-medium">
                {product.badge}
              </span>
            )}
            <h1 className="text-4xl font-display font-bold">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-clay">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <span className="text-charcoal/60">128 reviews</span>
            </div>
            <div className="text-2xl font-semibold">{product.price}</div>
            <p className="text-charcoal/80">{product.description}</p>
            
            <div className="space-y-6 py-6 border-y border-clay/10">
              <div className="flex items-center space-x-4">
                <Shield className="h-5 w-5 text-sage" />
                <span>100% Grass-Fed & Finished</span>
              </div>
              <div className="flex items-center space-x-4">
                <Leaf className="h-5 w-5 text-sage" />
                <span>Regeneratively Raised</span>
              </div>
            </div>

            <div className="space-y-4">
              {stripeProduct && (
                <CheckoutButton
                  priceId={stripeProduct.priceId}
                  mode={stripeProduct.mode}
                  className="w-full"
                />
              )}
            </div>

            <div className="bg-sage/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Shipping Information</h3>
              <p className="text-charcoal/70 text-sm">
                Free shipping on orders over $75. Orders typically ship within 1-2 business days.
                Delivered in our eco-friendly packaging to maintain product integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;