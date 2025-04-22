import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Success: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center p-8">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-sage" />
        </div>
        <h1 className="text-3xl font-display font-bold mb-4">Thank You for Your Purchase!</h1>
        <p className="text-charcoal/70 mb-8">
          Your order has been successfully processed. You will receive a confirmation email shortly.
        </p>
        <button
          onClick={() => navigate('/')}
          className="btn-primary"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Success;