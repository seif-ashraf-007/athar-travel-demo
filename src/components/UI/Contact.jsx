import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-gray-800 mb-8"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-gray-600 leading-relaxed mb-12"
        >
          We would love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out to us using the contact information below.
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
            <FaPhone className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Phone</h3>
            <p className="text-gray-700">
              +1 (123) 456-7890
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
            <FaEnvelope className="text-green-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Email</h3>
            <p className="text-gray-700">
              contact@yourcompany.com
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
            <FaMapMarkerAlt className="text-red-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Address</h3>
            <p className="text-gray-700">
              123 Main Street, Anytown, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
