import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const destinations = [
  { id: 1, name: 'Paris', country: 'France', description: 'City of Love', image: '1.jpeg', price: 1200, category: 'Cities' },
  { id: 2, name: 'Tokyo', country: 'Japan', description: 'Blend of Modern and Traditional', image: '2.jpeg', price: 1500, category: 'Cities' },
  { id: 3, name: 'New York', country: 'USA', description: 'The City That Never Sleeps', image: '3.jpeg', price: 1000, category: 'Cities' },
  { id: 4, name: 'Bali', country: 'Indonesia', description: 'Island Paradise', image: '4.jpeg', price: 800, category: 'Beach' },
  { id: 5, name: 'Rome', country: 'Italy', description: 'Eternal City', image: '5.jpeg', price: 1100, category: 'Cities' },
  { id: 6, name: 'Dubai', country: 'UAE', description: 'City of Gold', image: '6.jpeg', price: 1400, category: 'Beach' },
];

const categories = ['All', 'Cities', 'Beach'];

export default function Travel() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [currency, setCurrency] = useState('USD');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const rates = { USD: 1, EUR: 0.85, GBP: 0.75 };

  useEffect(() => {
    const filtered = destinations.filter(dest =>
      (selectedCategory === 'All' || dest.category === selectedCategory) &&
      (dest.name.toLowerCase().includes(searchTerm.toLowerCase()) || dest.country.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const sorted = filtered.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price') return a.price - b.price;
      return 0;
    });

    setFilteredDestinations(sorted);
  }, [searchTerm, sortBy, selectedCategory]);

  const [filteredDestinations, setFilteredDestinations] = useState(destinations);

  const addToCart = (destination) => {
    setCart([...cart, destination]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const convertCurrency = (price) => {
    return (price * rates[currency]).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Discover Your Next Adventure
        </h1>

        <div className="mb-8 flex flex-wrap justify-between items-center">
          <input
            type="text"
            placeholder="Search destinations..."
            className="p-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border rounded"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
          <select
            className="p-2 border rounded"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setShowCart(!showCart)}
          >
            {showCart ? 'Hide Cart' : 'Show Cart'}
          </button>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {filteredDestinations.map((dest) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{dest.name}, {dest.country}</h2>
                <p className="text-gray-600">{dest.description}</p>
                <p className="text-lg font-bold mt-2">
                  {currency} {convertCurrency(dest.price)}
                </p>
                <div className="mt-4 flex justify-between">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => setSelectedDestination(dest)}
                  >
                    Learn More
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => addToCart(dest)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {showCart && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-4 mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center mb-2">
                    <span>{item.name}</span>
                    <span>{currency} {convertCurrency(item.price)}</span>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="text-xl font-bold mt-4">
                  Total: {currency} {convertCurrency(totalPrice)}
                </div>
              </>
            )}
          </motion.div>
        )}

        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDestination(null)}
          >
            <div className="bg-white rounded-lg p-8 max-w-md" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-2xl font-bold mb-4">{selectedDestination.name}, {selectedDestination.country}</h2>
              <img src={selectedDestination.image} alt={selectedDestination.name} className="w-full h-48 object-cover mb-4" />
              <p className="text-gray-600 mb-4">{selectedDestination.description}</p>
              <p className="text-lg font-bold mb-4">
                Price: {currency} {convertCurrency(selectedDestination.price)}
              </p>
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                onClick={() => setSelectedDestination(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  ); }
