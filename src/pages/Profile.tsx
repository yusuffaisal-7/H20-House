import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useCart } from '../context/CartContext';
import { allProducts } from '../data/products';
import { Heart, Package, Award, ShoppingCart, Trash2, Plus, Minus, User, Mail, Phone, MapPin, Gift } from 'lucide-react';

export default function Profile() {
  const { wishlist, orders, points, removeFromWishlist } = useProfile();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'wishlist', name: 'Wishlist', icon: Heart },
    { id: 'orders', name: 'Orders', icon: Package },
    { id: 'points', name: 'Points', icon: Award },
    { id: 'cart', name: 'Cart', icon: ShoppingCart },
  ];

  const renderProfile = () => (
    <div className="space-y-6">
      {/* Profile Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-24 h-24 bg-[#9ACD32] rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
            <p className="text-gray-500">Member since January 2024</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#9ACD32]" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-900">john.doe@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#9ACD32]" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-900">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-[#9ACD32]" />
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="text-gray-900">123 Shopping Street, NY 10001</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Account Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Orders</span>
                <span className="font-medium">{orders.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Wishlist Items</span>
                <span className="font-medium">{wishlist.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Reward Points</span>
                <span className="font-medium text-[#9ACD32]">{points}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t">
          <button className="w-full bg-[#9ACD32] text-white py-2 px-4 rounded-md hover:bg-[#8BB82D] transition-colors duration-200">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Package className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">Order #12345 delivered</p>
              <p className="text-sm text-gray-500">2 days ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Award className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">Earned 50 reward points</p>
              <p className="text-sm text-gray-500">5 days ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-red-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">Added item to wishlist</p>
              <p className="text-sm text-gray-500">1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWishlist = () => {
    const wishlistProducts = wishlist.map(item => 
      allProducts.find(p => p.id === item.productId)
    ).filter(Boolean);

    if (wishlistProducts.length === 0) {
      return (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-500 mb-6">Save items you love and come back to them later!</p>
          <Link to="/products" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#9ACD32] hover:bg-[#8BB82D]">
            Explore Products
          </Link>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistProducts.map(product => product && (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[#9ACD32] font-bold">${product.price}</span>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderOrders = () => {
    if (orders.length === 0) {
      return (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">No orders yet</h3>
          <p className="text-gray-500 mb-6">Start shopping to see your orders here!</p>
          <Link to="/products" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#9ACD32] hover:bg-[#8BB82D]">
            Start Shopping
          </Link>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {orders.map(order => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                <p className="text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
            <div className="space-y-4">
              {order.items.map(item => {
                const product = allProducts.find(p => p.id === item.productId);
                return product && (
                  <div key={item.productId} className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <span className="font-medium">${product.price * item.quantity}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total</span>
                <span className="text-lg font-bold">${order.total}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderPoints = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-center">
        <Award className="h-16 w-16 text-[#9ACD32] mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Your Reward Points</h3>
        <p className="text-4xl font-bold text-[#9ACD32] mb-4">{points}</p>
        <p className="text-gray-600">
          Earn points with every purchase and redeem them for exclusive rewards!
        </p>
      </div>
      <div className="mt-8">
        <h4 className="font-semibold mb-4">How to earn more points:</h4>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Plus className="h-5 w-5 text-[#9ACD32] mr-2" />
            Make a purchase (1 point per $1)
          </li>
          <li className="flex items-center">
            <Plus className="h-5 w-5 text-[#9ACD32] mr-2" />
            Write a review (50 points)
          </li>
          <li className="flex items-center">
            <Plus className="h-5 w-5 text-[#9ACD32] mr-2" />
            Refer a friend (100 points)
          </li>
        </ul>
      </div>
      {points === 0 && (
        <div className="mt-8 text-center">
          <Gift className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">Start earning points by making purchases!</p>
        </div>
      )}
    </div>
  );

  const renderCart = () => {
    const cartProducts = cartItems.map(item => ({
      product: allProducts.find(p => p.id === item.productId),
      quantity: item.quantity,
    })).filter(item => item.product);

    if (cartProducts.length === 0) {
      return (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Add items to your cart to start shopping!</p>
          <Link to="/products" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#9ACD32] hover:bg-[#8BB82D]">
            Browse Products
          </Link>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {cartProducts.map(({ product, quantity }) => product && (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="mt-2 flex items-center">
                <button
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="mx-2">{quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="ml-4 text-right">
              <p className="font-medium">${product.price * quantity}</p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="mt-2 text-red-500 hover:text-red-600"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Total</span>
            <span className="text-xl font-bold">${getCartTotal().toFixed(2)}</span>
          </div>
          <button className="w-full mt-4 bg-[#9ACD32] text-white py-2 px-4 rounded-md hover:bg-[#8BB82D] transition-colors duration-200">
            Proceed to Checkout
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Sidebar */}
          <div className="md:w-64 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="space-y-1">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-[#9ACD32] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'profile' && renderProfile()}
            {activeTab === 'wishlist' && renderWishlist()}
            {activeTab === 'orders' && renderOrders()}
            {activeTab === 'points' && renderPoints()}
            {activeTab === 'cart' && renderCart()}
          </div>
        </div>
      </div>
    </div>
  );
}