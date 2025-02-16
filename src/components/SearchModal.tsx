import React, { useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import { useSearch } from '../context/SearchContext';
import { Link } from 'react-router-dom';
import { allProducts } from '../data/products';

export default function SearchModal() {
  const { searchQuery, setSearchQuery, isSearchOpen, setIsSearchOpen } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsSearchOpen]);

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div ref={modalRef} className="w-full max-w-2xl bg-white rounded-lg shadow-xl mx-4">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 ml-3 outline-none text-lg"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
        
        <div className="max-h-[60vh] overflow-y-auto">
          {searchQuery && (
            <div className="p-4">
              <div className="text-sm text-gray-500 mb-4">
                {filteredProducts.length} results found
              </div>
              {filteredProducts.length > 0 ? (
                <div className="space-y-4">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products?category=${product.category}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-start space-x-4 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.description}</p>
                        <p className="text-sm font-medium text-[#9ACD32] mt-1">
                          ${product.price}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No products found</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}