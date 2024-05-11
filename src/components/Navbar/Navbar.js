import React, { useState } from 'react';
import './Navbar.css';
import Maktab from '../../assets/Maktab.JPG'
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaWhatsapp, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-10 bg-white">
      {/* Mobile View */}
      <div className={`md:hidden flex justify-between items-center py-4 px-4 ${isOpen ? 'bg-gray-200' : ''}`}>
        {/* Menu Button for Mobile */}
        <div>
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Social Media Icons and Website Logo (Fixed) */}
        <div className="flex items-center">
          <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" className="text-gray-800 mr-4" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE" className="text-gray-800 mr-4" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/YOUR_YOUTUBE_CHANNEL" className="text-gray-800 mr-4" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://twitter.com/YOUR_TWITTER_HANDLE" className="text-gray-800 mr-4" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="/" className="text-gray-800 font-bold text-2xl">
            Maktab
          </a>
          {/* Placeholder for the dummy logo */}
          <img src={Maktab} className="w-0.25 h-0.25 bg-gray-400 rounded"></img>
        </div>
      </div>

      {/* Navigation Links for Mobile */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white rounded-md`}>
        <div className="border-b border-gray-300 rounded-t-md">
          <a href="/" className="block px-4 py-2 bg-green-500 text-white mb-1 rounded-t-md">
            #Quran
          </a>
        </div>
        <div className="border-b border-gray-300">
          <a href="/lectures" className="block px-4 py-2 bg-blue-600 text-white mb-1">
            #Spirituality
          </a>
        </div>
        <div className="border-b border-gray-300">
          <a href="/events" className="block px-4 py-2 bg-teal-500 text-white mb-1">
            #Discovering Islam
          </a>
        </div>
        <div className="border-b border-gray-300">
          <a href="/blog" className="block px-4 py-2 bg-green-700 text-white mb-1">
            #Shariah
          </a>
        </div>
        <div className="border-b border-gray-300">
          <a href="/download-quran" className="block px-4 py-2 bg-yellow-500 text-black mb-1">
            #Videos
          </a>
        </div>
        <div className="border-b border-gray-300">
          <a href="/pioneers" className="block px-4 py-2 bg-pink-600 text-white mb-1">
            #Family & Life
          </a>
        </div>
        <div className="border-b border-gray-300">
          <a href="/advisors" className="block px-4 py-2 bg-green-600 text-white mb-1">
            #Fatwa & Counseling
          </a>
        </div>
        <div className="border-b border-gray-300">
          <a href="/qiblah" className="block px-4 py-2 bg-red-600 text-white mb-1">
            #Muslim News
          </a>
        </div>
        <div className="border-b border-gray-300">
          <a href="/solat-time" className="block px-4 py-2 bg-orange-500 text-white mb-1">
            #Youth Q & A
          </a>
        </div>
        <div className="border-b border-gray-300 rounded-b-md">
          <a href="/donate" className="block px-4 py-2 bg-purple-600 text-white mb-1 rounded-b-md">
            #Donate
          </a>
        </div>
      </div>

      {/* Desktop View (Unchanged) */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-navy-900 text-white">
        <div className="flex items-center">
          <a href="/login" className="mr-4">
            Login
          </a>
          <a href="/create-account" className="mr-4">
            Create an account
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://www.facebook.com/YOUR_FACEBOOK_PAGE"
            className="mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE"
            className="mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/YOUR_YOUTUBE_CHANNEL"
            className="mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className="flex items-center">
          <a href="/riyadh" className="mr-4">
            Lagos
          </a>
          <a href="mailto:info@rohamaa.org" className="mr-4">
            info@rohamaa.org
          </a>
          <a href="tel:+96605508813655" className="mr-4">
            +96605508813655
          </a>
        </div>
      </div>

      <div className="hidden md:flex flex-wrap justify-center items-center px-8 py-4 bg-white">
        <a href="/" className="text-gray-800 mr-6 mb-2">
          Home
        </a>
        <a href="/lectures" className="text-gray-800 mr-6 mb-2">
          Lectures
        </a>
        <a href="/events" className="text-gray-800 mr-6 mb-2">
          Events
        </a>
        <a href="/blog" className="text-gray-800 mr-6 mb-2">
          Blog
        </a>
        <a href="/download-quran" className="text-gray-800 mr-6 mb-2">
          Download Quran
        </a>
        <a href="/pioneers" className="text-gray-800 mr-6 mb-2">
          Pioneers
        </a>
        <a href="/advisors" className="text-gray-800 mr-6 mb-2">
          Advisors
        </a>
        <a href="/qiblah" className="text-gray-800 mr-6 mb -2">
          Qiblah
        </a>
        <a href="/solat-time" className="text-gray-800 mr-6 mb-2">
          Solat Time
        </a>
        <div className="flex items-center">
          <a href="/" className="text-gray-800 font-bold text-2xl">
            ROHAMA'A Health Society
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
