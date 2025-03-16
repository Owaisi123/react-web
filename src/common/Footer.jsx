import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 My Website. All rights reserved.</p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://x.com/M_Owaisi18" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            X (Twitter)
          </a>

          <Link to="/" className="hover:text-gray-400">Privacy Policy</Link>
          <Link to="/" className="hover:text-gray-400">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
