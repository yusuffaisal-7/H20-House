import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WishlistItem {
  productId: number;
}

interface Order {
  id: string;
  date: string;
  items: {
    productId: number;
    quantity: number;
  }[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
}

interface ProfileContextType {
  wishlist: WishlistItem[];
  orders: Order[];
  points: number;
  addToWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
  addOrder: (order: Order) => void;
  addPoints: (points: number) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [points, setPoints] = useState(0);

  const addToWishlist = (productId: number) => {
    setWishlist(prev => {
      if (prev.some(item => item.productId === productId)) return prev;
      return [...prev, { productId }];
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist(prev => prev.filter(item => item.productId !== productId));
  };

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  const addPoints = (newPoints: number) => {
    setPoints(prev => prev + newPoints);
  };

  return (
    <ProfileContext.Provider
      value={{
        wishlist,
        orders,
        points,
        addToWishlist,
        removeFromWishlist,
        addOrder,
        addPoints,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}