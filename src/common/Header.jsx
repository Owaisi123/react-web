import React from 'react'
import { Link } from 'react-router-dom'
import { RiTwitterXFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";


function Header() {
  const handleClick = () => {
    window.location.href = 'https://x.com/M_Owaisi18';
  };

  return (
    <header className="text-slate-700 px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between bg-white shadow-md">

      <div className="flex items-center gap-2">
        <FaGlobe size={40} className="text-black" />

      </div>

      <ul className="flex items-center gap-4 sm:gap-6">
        <li>
          <Link to="/" className="font-thin text-base sm:text-lg text-red-700 hover:text-red-500">Home</Link>
        </li>
        <li>
          <Link to="/about-us" className="font-thin text-base sm:text-lg text-red-700 hover:text-red-500">About</Link>
        </li>
        <li>
          <Link to="/contact" className="font-thin text-base sm:text-lg text-red-700 hover:text-red-500">Contact</Link>
        </li>
      </ul>

      <button onClick={handleClick} className="ml-2 sm:ml-4">
        <RiTwitterXFill size={30} className="text-black hover:text-gray-700" />
      </button>
    </header>
  )
}

export default Header
