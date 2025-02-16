import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, ShoppingBag, Users, Award, Shield, Heart, Zap, Truck, Star, Gift } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80')] bg-cover bg-center"/>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"/>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              <span className="block transform hover:scale-105 transition-transform duration-300">
                Welcome to H2O
              </span>
              <span className="block text-[#9ACD32] mt-2 transform hover:scale-105 transition-transform duration-300">
                Premium Lifestyle Store
              </span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-gray-200 sm:max-w-3xl animate-fadeIn opacity-0" style={{ animationDelay: '0.3s' }}>
              Discover our curated collection of premium products for your lifestyle. From tech gadgets to beauty essentials.
            </p>
            <div className="mt-10 animate-fadeIn opacity-0" style={{ animationDelay: '0.6s' }}>
              <Link to="/products" className="inline-flex items-center px-8 py-4 border-2 border-[#9ACD32] text-lg font-medium rounded-full text-white bg-[#9ACD32] hover:bg-transparent hover:text-[#9ACD32] transition-all duration-300 transform hover:scale-105">
                Shop Now
                <ShoppingBag className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Gift className="h-10 w-10 text-[#9ACD32]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Shop with H2O?</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Your premium shopping destination since 2010.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Premium Quality", desc: "Curated selection of top brands" },
              { icon: Truck, title: "Fast Delivery", desc: "Free shipping on orders over $50" },
              { icon: Shield, title: "Secure Shopping", desc: "100% secure payment" },
              { icon: Heart, title: "24/7 Support", desc: "Dedicated customer service" }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                  <div className="absolute top-0 left-0 h-2 w-full bg-[#9ACD32] transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"/>
                  <feature.icon className="h-12 w-12 text-[#9ACD32] mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tech Gadgets",
                image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80",
                desc: "Smart devices for modern living"
              },
              {
                title: "Beauty & Wellness",
                image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80",
                desc: "Premium beauty products"
              },
              {
                title: "Home & Living",
                image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80",
                desc: "Enhance your living space"
              }
            ].map((category, index) => (
              <Link to="/products" key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-white/90">{category.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-[#9ACD32]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Start Shopping Today</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust H2O for their lifestyle needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-[#9ACD32] bg-white hover:bg-transparent hover:text-white transition-all duration-300">
              Shop Now
              <ShoppingBag className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-[#9ACD32] transition-all duration-300">
              Contact Us
              <Heart className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}