import { useState, useEffect } from 'react';
import { Product } from '../types';
import { getProducts } from '../stripe-config';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Use the products from our Stripe config
      const stripeProducts = getProducts();
      setProducts(stripeProducts);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  }, []);

  return { products, loading, error };
}