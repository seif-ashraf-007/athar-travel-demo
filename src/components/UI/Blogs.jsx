import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { FaHeart, FaComment, FaShare, FaBookmark, FaSearch, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Everyday Life",
    excerpt: "Exploring how artificial intelligence is reshaping our daily routines and interactions.",
    author: "Alex Johnson",
    date: "Mar 15, 2024",
    category: "Technology",
    readTime: "5 min read",
    likes: 120,
    comments: 45,
  },
  {
    id: 2,
    title: "Sustainable Living: Small Changes, Big Impact",
    excerpt: "Discover simple ways to reduce your carbon footprint and live a more eco-friendly life.",
    author: "Emma Green",
    date: "Mar 12, 2024",
    category: "Lifestyle",
    readTime: "4 min read",
    likes: 89,
    comments: 32,
  },
  {
    id: 3,
    title: "The Art of Mindfulness in a Busy World",
    excerpt: "Learn techniques to stay present and reduce stress in your fast-paced life.",
    author: "Michael Chen",
    date: "Mar 10, 2024",
    category: "Wellness",
    readTime: "6 min read",
    likes: 156,
    comments: 58,
  },
];

function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

function SocialShare({ post }) {
  const shareUrl = `https://yourblog.com/post/${post.id}`;

  return (
    <div className="flex space-x-2 mt-4">
      <button className="p-2 bg-blue-400 text-white rounded-full">
        <FaTwitter />
      </button>
      <button className="p-2 bg-blue-600 text-white rounded-full">
        <FaFacebook />
      </button>
      <button className="p-2 bg-blue-800 text-white rounded-full">
        <FaLinkedin />
      </button>
    </div>
  );
}

function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      setSuccess('');
      return;
    }

    // Implement newsletter subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
    setError('');
    setSuccess('Thank you for subscribing!');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 bg-gray-100 p-6 rounded-lg" >
      <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
      <div className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow p-2 rounded-l-lg"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-lg">
          Subscribe
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </form>
  );
}

function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);

  const categories = ['All', 'Technology', 'Lifestyle', 'Wellness'];
  const postsPerPage = 6;

  const filteredPosts = blogPosts.filter(post =>
    (selectedCategory === 'All' || post.category === selectedCategory) &&
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);
  const offset = currentPage * postsPerPage;
  const currentPosts = filteredPosts.slice(offset, offset + postsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8" id='blog'>
      <ReadingProgressBar />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Our <span className="text-blue-500">Blog</span>
          </h1>
        </div>

        <div className="mb-8 flex flex-wrap justify-between items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="p-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex space-x-2 mt-4 sm:mt-0">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition duration-300`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="p-6">
                <p className="text-sm font-semibold text-blue-500 mb-2">{post.category}</p>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <p>{post.author}</p>
                  <p>{post.date}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">{post.readTime}</p>
                  <div className="flex space-x-3">
                    <button className="text-red-500 hover:text-red-600"><FaHeart /> {post.likes}</button>
                    <button className="text-blue-500 hover:text-blue-600"><FaComment /> {post.comments}</button>
                    <button className="text-green-500 hover:text-green-600"><FaShare /></button>
                    <button className="text-yellow-500 hover:text-yellow-600"><FaBookmark /></button>
                  </div>
                </div>
                <SocialShare post={post} />
              </div>
            </motion.div>
          ))}
        </div>

        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination flex justify-center space-x-2 mt-8'}
          pageClassName={'bg-gray-200 text-gray-800 px-3 py-1 rounded'}
          activeClassName={'bg-blue-500 text-white'}
          previousClassName={'bg-gray-200 text-gray-800 px-3 py-1 rounded'}
          nextClassName={'bg-gray-200 text-gray-800 px-3 py-1 rounded'}
        />

        <NewsletterSubscription />
      </motion.div>
    </div>
  );
}

export default BlogPage;
