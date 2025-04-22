import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Culinary Beef Tallow",
    description: "100% grass-fed, rendered in small batches. Perfect for high-heat cooking with a rich, nutty flavor.",
    price: "$18.95",
    priceInCents: 1895,
    imageUrl: "https://images.pexels.com/photos/6107765/pexels-photo-6107765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "culinary",
    badge: "Best Seller",
    size: "14oz jar"
  },
  {
    id: 2,
    name: "Tallow Balm",
    description: "For skin hydration and healing. Available in lavender and unscented versions.",
    price: "$14.95",
    priceInCents: 1495,
    imageUrl: "https://images.pexels.com/photos/6690924/pexels-photo-6690924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "skincare",
    size: "4oz tin"
  },
  {
    id: 3,
    name: "Tallow Sticks",
    description: "Pocket-size, perfect for lip and hand care on the go.",
    price: "$8.95",
    priceInCents: 895,
    imageUrl: "https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "skincare",
    size: "1oz stick"
  },
  {
    id: 4,
    name: "Cooking Fat Bricks",
    description: "For serious home cooks and carnivore crowd. Pure, unadulterated grass-fed tallow.",
    price: "$32.95",
    priceInCents: 3295,
    imageUrl: "https://images.pexels.com/photos/262905/pexels-photo-262905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "culinary",
    badge: "Bulk Size",
    size: "32oz brick"
  }
];