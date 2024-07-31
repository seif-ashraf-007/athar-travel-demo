import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Stay Connected</h1>
        <p className="text-gray-400 mb-8">
          Follow us on our social media channels to stay updated with the latest news and offers.
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FaLinkedinIn className="text-2xl" />
          </a>
        </div>
        
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
