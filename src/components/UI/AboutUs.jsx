import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaSuitcase, FaStar } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-gray-800 mb-6"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-gray-600 leading-relaxed mb-12"
        >
          Welcome to our travel agency, where your dream vacations become reality. We specialize in crafting personalized travel experiences, offering unparalleled service, and guiding you to the most breathtaking destinations. Our dedicated team is here to ensure every journey is unforgettable.
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs mx-auto">
            <FaGlobe className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Global Reach</h3>
            <p className="text-gray-700">
              Explore the world with our extensive network of global partners and destinations.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs mx-auto">
            <FaSuitcase className="text-green-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Tailored Packages</h3>
            <p className="text-gray-700">
              Enjoy customized travel packages designed to meet your every need and desire.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs mx-auto">
            <FaStar className="text-yellow-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Exceptional Service</h3>
            <p className="text-gray-700">
              Experience top-notch service from our team of dedicated travel experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
