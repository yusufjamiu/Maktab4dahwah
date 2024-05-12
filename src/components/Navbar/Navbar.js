import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaWhatsapp, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { GiHouse, GiSettingsKnobs, GiLightBulb } from 'react-icons/gi';
import { MdChecklist, MdCalendarToday, MdAccessibility } from 'react-icons/md';
import { IoMdPaper, IoIosConstruct, IoMdRestaurant } from 'react-icons/io';

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
            Maktab Dahwah
          </a>
        </div>
      </div>

      {/* Navigation Links for Mobile */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white rounded-md`}>
        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="flex flex-col items-center">
            <GiHouse className="text-2xl text-gray-800" />
            <span className="text-sm text-gray-800">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <GiSettingsKnobs className="text-2xl text-gray-800" />
            <span className="text-sm text-gray-800">Settings</span>
          </div>
          <div className="flex flex-col items-center">
            <GiLightBulb className="text-2xl text-gray-800" />
            <span className="text-sm text-gray-800">Articles</span>
          </div>
          <div className="flex flex-col items-center">
            <MdChecklist className="text-2xl text-gray-800" />
            <span className="text-sm text-gray-800">Daily goals</span>
          </div>
          <div className="flex flex-col items-center">
            <MdCalendarToday className="text-2xl text-gray-800" />
            <span className="text-sm text-gray-800">Calendar</span>
          </div>
          <div className="flex flex-col items-center">
            <MdAccessibility className="text-2xl text-gray-800" />
            <span className="text-sm text-gray-800">On this day</span>
          </div>
          <div className="flex flex-col items-center">
            <IoMdPaper className="text-2xl text-gray-800" />
            <span className="text-sm text-gray-800">Salah around the world</span>
          </div>
          <div className="flex flex-col items-center">
            <IoIosConstruct className="text-2xl text-gray-800" />
            <span className="text-sm text-gray-800">Surveys</span>
          </div>
          <div className="flex flex-col items-center">
            <IoMdRestaurant className="text-2xl text-gray-800" />
            <span className="text-sm text-gray-800">Halal Restaurants</span>
          </div>
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
