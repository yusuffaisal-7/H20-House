interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Smart Water Bottle",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    description: "Tracks your water intake and reminds you to stay hydrated",
    category: "tech"
  },
  {
    id: 2,
    name: "UV Water Purifier",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=500",
    description: "Advanced UV technology for pure drinking water",
    category: "tech"
  },
  {
    id: 3,
    name: "Water Quality Tester",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500",
    description: "Digital device to test water quality instantly",
    category: "tech"
  },
  {
    id: 4,
    name: "Hydrating Face Mist",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500",
    description: "Refreshing mineral water spray for your face",
    category: "beauty"
  },
  {
    id: 5,
    name: "Water-Based Moisturizer",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500",
    description: "Light and hydrating skincare solution",
    category: "beauty"
  },
  {
    id: 6,
    name: "Bath Therapy Set",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1570194065650-d707c4c96c8c?w=500",
    description: "Luxury bath products for ultimate relaxation",
    category: "beauty"
  },
  {
    id: 7,
    name: "Water Filter System",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500",
    description: "Whole-house water filtration solution",
    category: "home"
  },
  {
    id: 8,
    name: "Smart Humidifier",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1585351923007-bf6a01cb19de?w=500",
    description: "Intelligent humidity control for your home",
    category: "home"
  },
  {
    id: 9,
    name: "Water Fountain",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1536702250234-4d69a7c9f165?w=500",
    description: "Decorative indoor water feature",
    category: "home"
  }
];