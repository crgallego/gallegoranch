import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle } from 'lucide-react';

const Canceled: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center p-8">
        <div className="flex justify-center mb-6">
          <XCircle className="h-16 w-16 text-clay" />
        </div>
        <h1 className="text-3xl font-display font-bold mb-4">Purchase Canceled</h1>
        <p className="text-charcoal/70 mb-8">
          Your order has been canceled. No charges have been made.
        </p>
        <button
          onClick={() => navigate('/')}
          className="btn-primary"
        >
          Return to Shopping
        </button>
      </div>
    </div>
  );
};

export default Canceled;