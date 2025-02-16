import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplets, ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { useSearch } from '../context/SearchContext';
import { useCart } from '../context/CartContext';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { setIsSearchOpen } = useSearch();
  const { cartItems } = useCart();

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <Droplets className="h-8 w-8 text-[#9ACD32]" />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link 
                    to="/" 
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#9ACD32] transition-colors duration-200"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/products" 
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#9ACD32] transition-colors duration-200"
                  >
                    Products
                  </Link>
                  <Link 
                    to="/about" 
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#9ACD32] transition-colors duration-200"
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#9ACD32] transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="p-1 rounded-full text-gray-800 hover:text-[#9ACD32] transition-colors duration-200"
                >
                  <Search className="h-6 w-6" />
                </button>
                <Link 
                  to="/profile" 
                  className="ml-3 p-1 rounded-full text-gray-800 hover:text-[#9ACD32] transition-colors duration-200"
                >
                  <User className="h-6 w-6" />
                </Link>
                <Link 
                  to="/profile?tab=cart" 
                  className="ml-3 p-1 rounded-full text-gray-800 hover:text-[#9ACD32] transition-colors duration-200 relative"
                >
                  <ShoppingBag className="h-6 w-6" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#9ACD32] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#9ACD32] transition-colors duration-200"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#9ACD32] transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#9ACD32] transition-colors duration-200"
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#9ACD32] transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#9ACD32] transition-colors duration-200"
              >
                Contact
              </Link>
              <Link 
                to="/profile" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#9ACD32] transition-colors duration-200"
              >
                Profile
              </Link>
              <button 
                onClick={() => {
                  setIsSearchOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#9ACD32] transition-colors duration-200"
              >
                Search
              </button>
            </div>
          </div>
        )}
      </nav>
      <SearchModal />
    </>
  );
}