import React, { useState } from 'react';

const categories = [
  {
    id: 'tech',
    name: 'Tech Gadgets',
    products: [
      {
        id: 1,
        name: "Smart Water Bottle",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
        description: "Tracks your water intake and reminds you to stay hydrated"
      },
      {
        id: 2,
        name: "UV Water Purifier",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=500",
        description: "Advanced UV technology for pure drinking water"
      },
      {
        id: 3,
        name: "Water Quality Tester",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500",
        description: "Digital device to test water quality instantly"
      }
    ]
  },
  {
    id: 'beauty',
    name: 'Beauty & Wellness',
    products: [
      {
        id: 4,
        name: "Hydrating Face Mist",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500",
        description: "Refreshing mineral water spray for your face"
      },
      {
        id: 5,
        name: "Water-Based Moisturizer",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500",
        description: "Light and hydrating skincare solution"
      },
      {
        id: 6,
        name: "Bath Therapy Set",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1570194065650-d707c4c96c8c?w=500",
        description: "Luxury bath products for ultimate relaxation"
      }
    ]
  },
  {
    id: 'home',
    name: 'Home & Living',
    products: [
      {
        id: 7,
        name: "Water Filter System",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500",
        description: "Whole-house water filtration solution"
      },
      {
        id: 8,
        name: "Smart Humidifier",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1585351923007-bf6a01cb19de?w=500",
        description: "Intelligent humidity control for your home"
      },
      {
        id: 9,
        name: "Water Fountain",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1536702250234-4d69a7c9f165?w=500",
        description: "Decorative indoor water feature"
      }
    ]
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="pt-16">
      <div className="bg-[#9ACD32] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Our Products</h1>
          <p className="mt-4 text-xl text-white text-center">Discover our range of innovative solutions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === 'all'
                ? 'bg-[#9ACD32] text-white'
                : 'bg-white text-gray-700 hover:bg-[#9ACD32] hover:text-white'
            } transition-colors duration-200`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-[#9ACD32] text-white'
                  : 'bg-white text-gray-700 hover:bg-[#9ACD32] hover:text-white'
              } transition-colors duration-200`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {filteredCategories.map((category) => (
          <div key={category.id} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product) => (
                <div key={product.id} className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
                  <div className="w-full h-64 bg-gray-200 aspect-w-1 aspect-h-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                    <p className="mt-1 text-lg font-semibold text-[#9ACD32]">${product.price}</p>
                    <button className="mt-4 w-full bg-[#9ACD32] text-white py-2 px-4 rounded-md hover:bg-[#8BB82D] transition-colors duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}