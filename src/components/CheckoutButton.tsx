import React from 'react';
import { useStripeCheckout } from '../hooks/useStripeCheckout';
import { ShoppingBag } from 'lucide-react';

interface CheckoutButtonProps {
  priceId: string;
  mode: 'payment' | 'subscription';
  className?: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ priceId, mode, className = '' }) => {
  const { createCheckoutSession, loading, error } = useStripeCheckout();

  const handleCheckout = async () => {
    const baseUrl = window.location.origin;
    await createCheckoutSession({ 
      priceId, 
      mode,
      isGuest: true,
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/canceled`
    });
  };

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`btn-primary flex items-center justify-center ${className} ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
            Processing...
          </div>
        ) : (
          <>
            <ShoppingBag className="h-5 w-5 mr-2" />
            Buy Now
          </>
        )}
      </button>
      {error && (
        <p className="text-red-600 text-sm mt-2">{error}</p>
      )}
    </div>
  );
};

export default CheckoutButton;