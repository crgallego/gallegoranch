import { Product } from './types';

export const STRIPE_PRODUCTS = {
  TALLOW_14OZ: {
    priceId: 'price_1RG44rACKCNZyua2hcjB8Xs3',
    productId: 'prod_SAOsBWFKVgohGP',
    name: '14oz Culinary Beef Tallow',
    description: '100% grass-fed, rendered in small batches. Perfect for high-heat cooking with a rich, nutty flavor.',
    price: '$18.95',
    priceInCents: 1895,
    mode: 'payment' as const,
    imageUrl: 'https://images.pexels.com/photos/6107765/pexels-photo-6107765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'culinary' as const,
    size: '14oz jar',
    badge: 'Best Seller'
  }
} as const;

// Helper function to convert Stripe products to our Product type
export function getProducts(): Product[] {
  return Object.values(STRIPE_PRODUCTS).map(product => ({
    id: 1, // Since we only have one product
    name: product.name,
    description: product.description,
    price: product.price,
    priceInCents: product.priceInCents,
    imageUrl: product.imageUrl,
    category: product.category,
    size: product.size,
    badge: product.badge
  }));
}