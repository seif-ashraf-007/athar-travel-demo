import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const destinations = [
  { id: 1, name: 'Paris', country: 'France', description: 'City of Love', image: '1.jpeg', price: 1200, category: 'Cities', rating: 4.5 },
  { id: 2, name: 'Tokyo', country: 'Japan', description: 'Blend of Modern and Traditional', image: '2.jpeg', price: 1500, category: 'Cities', rating: 4.7 },
  { id: 3, name: 'New York', country: 'USA', description: 'The City That Never Sleeps', image: '3.jpeg', price: 1000, category: 'Cities', rating: 4.6 },
  { id: 4, name: 'Bali', country: 'Indonesia', description: 'Island Paradise', image: '4.jpeg', price: 800, category: 'Beach', rating: 4.8 },
  { id: 5, name: 'Rome', country: 'Italy', description: 'Eternal City', image: '5.jpeg', price: 1100, category: 'Cities', rating: 4.4 },
  { id: 6, name: 'Dubai', country: 'UAE', description: 'City of Gold', image: '6.jpeg', price: 1400, category: 'Beach', rating: 4.3 },
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
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [showReviews, setShowReviews] = useState(false);
  const [reviews, setReviews] = useState({});

  const rates = { USD: 1, EUR: 0.85, GBP: 0.75 };

  useEffect(() => {
    const filtered = destinations.filter(dest =>
      (selectedCategory === 'All' || dest.category === selectedCategory) &&
      (dest.name.toLowerCase().includes(searchTerm.toLowerCase()) || dest.country.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const sorted = filtered.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
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

  const toggleWishlist = (destId) => {
    if (wishlist.includes(destId)) {
      setWishlist(wishlist.filter(id => id !== destId));
    } else {
      setWishlist([...wishlist, destId]);
    }
  };

  const addReview = (destId, review) => {
    setReviews({
      ...reviews,
      [destId]: [...(reviews[destId] || []), review]
    });
  };

  const login = (username, password) => {
    // Mock login
    setUser({ username });
    setShowLogin(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8" id='travel'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Discover Your Next Adventure</h1>
          <div>
            {user ? (
              <div>
                <span>Welcome, {user.username}!</span>
                <button onClick={logout} className="ml-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
              </div>
            ) : (
              <button onClick={() => setShowLogin(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            )}
          </div>
        </div>

        <div className="mb-8 flex flex-wrap justify-between items-center">
          <input
            type="text"
            placeholder="Search destinations..."
            className="p-2 border rounded bg-white text-gray-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border rounded bg-white text-gray-800"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
            <option value="rating">Sort by Rating</option>
          </select>
          <select
            className="p-2 border rounded bg-white text-gray-800"
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
              className="rounded-lg shadow-md overflow-hidden bg-white"
            >
              <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{dest.name}, {dest.country}</h2>
                <p className="text-gray-600">{dest.description}</p>
                <p className="text-lg font-bold mt-2">
                  {currency} {convertCurrency(dest.price)}
                </p>
                <p className="text-yellow-500">★ {dest.rating.toFixed(1)}</p>
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
                  <button
                    className={`px-4 py-2 rounded ${wishlist.includes(dest.id) ? 'bg-red-500' : 'bg-gray-500'}`}
                    onClick={() => toggleWishlist(dest.id)}
                  >
                    {wishlist.includes(dest.id) ? '♥' : '♡'}
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
            className="rounded-lg shadow-md p-4 mb-8 bg-white"
          >
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                <ul>
                  {cart.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item.name} - {currency} {convertCurrency(item.price)}
                      <button
                        className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-bold mt-4">Total: {currency} {convertCurrency(totalPrice)}</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">Checkout</button>
              </div>
            )}
          </motion.div>
        )}

        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg shadow-md p-4 mb-8 bg-white"
          >
            <h2 className="text-2xl font-bold mb-4">{selectedDestination.name}, {selectedDestination.country}</h2>
            <p>{selectedDestination.description}</p>
            <p className="text-lg font-bold mt-2">
              {currency} {convertCurrency(selectedDestination.price)}
            </p>
            <p className="text-yellow-500">★ {selectedDestination.rating.toFixed(1)}</p>
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setShowReviews(true)}
              >
                View Reviews
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded ml-4"
                onClick={() => setSelectedDestination(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}

        {showReviews && selectedDestination && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg shadow-md p-4 mb-8 bg-white"
          >
            <h2 className="text-2xl font-bold mb-4">Reviews for {selectedDestination.name}</h2>
            {reviews[selectedDestination.id]?.length > 0 ? (
              <ul>
                {reviews[selectedDestination.id].map((review, index) => (
                  <li key={index} className="mb-2">
                    <p><strong>{review.username}</strong>: {review.comment}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews yet.</p>
            )}
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setShowReviews(false)}
            >
              Close
            </button>
          </motion.div>
        )}

        {showLogin && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg shadow-md p-4 mb-8 bg-white"
          >
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const { username, password } = e.target.elements;
                login(username.value, password.value);
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input name="username" type="text" className="w-full p-2 border rounded bg-white text-gray-800" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input name="password" type="password" className="w-full p-2 border rounded bg-white text-gray-800" required />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            </form>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
