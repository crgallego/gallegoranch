import React from 'react';
import { ShoppingBag, X, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useStripeCheckout } from '../hooks/useStripeCheckout';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, total, removeItem, updateQuantity } = useCartStore();
  const { createCheckoutSession, loading, error } = useStripeCheckout();

  const handleCheckout = async () => {
    const baseUrl = window.location.origin;
    await createCheckoutSession({
      items: items.map(item => ({
        price_id: item.product.priceId,
        quantity: item.quantity
      })),
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/canceled`,
      mode: 'payment'
    });
  };

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`}>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }`} 
        onClick={onClose}
      />
      
      {/* Cart Panel */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-cream transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-clay/10">
            <div className="flex items-center">
              <ShoppingBag className="h-6 w-6 text-clay mr-2" />
              <h2 className="text-xl font-semibold">Your Cart</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-clay/5 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag className="h-12 w-12 text-clay/20 mx-auto mb-4" />
                <p className="text-charcoal/60">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                    <img 
                      src={item.product.imageUrl} 
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-sm text-charcoal/60">{item.product.size}</p>
                      <p className="text-clay font-medium mt-1">${(item.product.priceInCents / 100).toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <button 
                        onClick={() => removeItem(item.product.id)}
                        className="text-charcoal/40 hover:text-clay transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                          className="p-1 hover:bg-clay/5 rounded"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-clay/5 rounded"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-clay/10 p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total</span>
                <span className="text-xl font-semibold">${(total / 100).toFixed(2)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                disabled={loading}
                className={`btn-primary w-full flex items-center justify-center ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Processing...
                  </div>
                ) : (
                  'Proceed to Checkout'
                )}
              </button>
              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;