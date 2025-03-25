"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Logo from "/public/images/logo.png";
import Link from 'next/link';
import { SlMenu } from "react-icons/sl";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleFormChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setQuery('');
    closeMenu();
  };

  return (
    <header className="bg-white border-b-[1px] border-gray-300 sticky top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between py-1 px-4 lg:px-8">
        <Link className="flex items-center space-x-4" href="/">
          <Image
            src={Logo}
            loading='lazy'
            alt="Logo"
            className="w-40 lg:w-32 lg:h-24"
          />
        </Link>
        <button onClick={toggleMenu} className="p-1 lg:hidden text-gray-800">
          <SlMenu />
        </button>

        <nav className="navigation hidden lg:flex space-x-8">
          <Link href="/" className="text-gray-700 font-semibold hover:text-red-500 transition duration-200">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 font-semibold hover:text-red-500 transition duration-200">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 font-semibold hover:text-red-500 transition duration-200">
            Contact
          </Link>
          <Link href="/products" className="text-gray-700 font-semibold hover:text-red-500 transition duration-200">
            Products
          </Link>
        </nav>
        <div className="hidden lg:flex items-center space-x-5">
          <form className='border-2 border-b-red-500 border-transparent p-1' onSubmit={handleFormSubmit}>
            <input
              className='bg-transparent outline-none text-black'
              type="text"
              placeholder='Search...'
              value={query}
              onChange={handleFormChange}
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
      <div
        className={`fixed inset-0 left-0 w-64 bg-gray-100 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:hidden`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
          Close
        </button>
        <ul className="p-4 text-gray-700 space-y-4">
          <li>
            <Link href="/" onClick={closeMenu} className="hover:text-red-600 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu} className="hover:text-red-600 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu} className="hover:text-red-600 transition duration-200">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/products" onClick={closeMenu} className="hover:text-red-600 transition duration-200">
              Products
            </Link>
          </li>
          <li>
            <form className='border-2 border-b-red-500 border-transparent p-1' onSubmit={handleFormSubmit}>
              <input
                className='bg-transparent outline-none text-black'
                type="text"
                placeholder='Search...'
                value={query}
                onChange={handleFormChange}
              />
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </li>
        </ul>
      </div>
    </header>
  );
}