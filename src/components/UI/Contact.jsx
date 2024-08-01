import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    { icon: FaPhone, color: 'blue', title: 'Phone', info: '+1 (123) 456-7890' },
    { icon: FaEnvelope, color: 'green', title: 'Email', info: 'contact@yourcompany.com' },
    { icon: FaMapMarkerAlt, color: 'red', title: 'Address', info: '123 Main Street, Anytown, USA' },
    { icon: FaWhatsapp, color: 'green', title: 'WhatsApp', info: '+1 (987) 654-3210' },
    { icon: FaFacebookMessenger, color: 'blue', title: 'Messenger', info: '@yourcompany' },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
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
          We would love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out to us using any of the contact methods below.
        </motion.p>
       
        <div className="flex flex-wrap justify-center gap-8 mb-16" id='contact'>
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:shadow-xl transition-shadow duration-300"
            >
              <item.icon className={`text-${item.color}-500 text-4xl mb-4 mx-auto`} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-700">{item.info}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
              </div>
            </div>
            <div>
              <input type="text" placeholder="Subject" className="w-full p-2 border rounded" />
            </div>
            <div>
              <textarea placeholder="Your message" rows="4" className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-600 transition-colors duration-300">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;