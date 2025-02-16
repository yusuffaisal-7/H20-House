import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import { SearchProvider } from './context/SearchContext';
import { CartProvider } from './context/CartContext';
import { ProfileProvider } from './context/ProfileContext';

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <ProfileProvider>
          <div className="min-h-screen bg-white">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </ProfileProvider>
      </CartProvider>
    </SearchProvider>
  );
}

export default App