export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: 'culinary' | 'skincare';
  badge?: string;
  size: string;
  priceInCents: number;
  priceId: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  role: string;
  quote: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}