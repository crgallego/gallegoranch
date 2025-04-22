import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    addItem(product);
  };

  return (
    <div className="product-card group">
      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {product.badge && (
            <div className="absolute top-4 right-4 bg-clay/90 text-cream px-3 py-1 rounded-full text-xs font-medium">
              {product.badge}
            </div>
          )}
          <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-charcoal/70 to-transparent">
            <div className="text-cream text-sm font-medium">{product.size}</div>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-xl font-display font-semibold mb-2">{product.name}</h3>
        </Link>
        <p className="text-charcoal/70 mb-4 text-sm line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-clay font-medium">{product.price}</div>
          <button
            onClick={handleAddToCart}
            className="btn-primary py-2 px-4 text-sm flex items-center"
          >
            <ShoppingBag className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;