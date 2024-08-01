import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaSuitcase, FaStar, FaUsers, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const AboutUs = () => {
  const features = [
    { icon: FaGlobe, color: 'blue', title: 'Global Reach', description: 'Explore the world with our extensive network of global partners and destinations.' },
    { icon: FaSuitcase, color: 'green', title: 'Tailored Packages', description: 'Enjoy customized travel packages designed to meet your every need and desire.' },
    { icon: FaStar, color: 'yellow', title: 'Exceptional Service', description: 'Experience top-notch service from our team of dedicated travel experts.' },
    { icon: FaUsers, color: 'purple', title: 'Group Travel', description: 'Specialized in organizing memorable group trips for families, friends, and corporate events.' },
    { icon: FaPhoneAlt, color: 'red', title: '24/7 Support', description: 'Round-the-clock customer support to assist you before, during, and after your trip.' },
  ];

  return (
    <div className="bg-white py-16 px-4" id='about'>
      <div className="max-w-6xl mx-auto text-center">
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
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className={`text-${feature.color}-500 text-4xl mb-4 mx-auto`} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition-colors duration-300"
          >
            <FaWhatsapp className="mr-2 text-xl" />
            Contact us 

          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;