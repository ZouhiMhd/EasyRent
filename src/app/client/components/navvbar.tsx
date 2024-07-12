'use client'

import React from 'react';
import Link from 'next/link';
import { BiSearch, BiBell } from 'react-icons/bi';
import { CircleUserRound } from 'lucide-react';
import { useAuth } from '@/contexts/authContext';

export const Navbar: React.FC = () => {
  const [header, setHeader] = React.useState(false);
  const [userMenu, setUserMenu] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const { user, logout } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add search logic here (redirection, API call, etc.)
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="w-full sticky top-0 z-50">
      <header className={`transition-all duration-300 ${header ? 'bg-white shadow-md py-2' : 'bg-black shadow-none py-4'}`}>
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-2xl font-serif font-bold text-gray-300">
            <h1>Easy<span className="text-green-500">Rent</span></h1>
          </div>
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
                className="px-2 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
              />
              <button type="submit" className="ml-2 px-2 py-1 bg-blue-500 text-white rounded">
                <BiSearch className="w-5 h-5" />
              </button>
            </form>
            <div className="flex space-x-4 items-center">
              <Link href="/" className="text-gray-300 hover:text-emerald-300">Home</Link>
              <Link href="/client/about" className="text-gray-300 hover:text-emerald-300">About</Link>
              <Link href="/client/cars" className="text-gray-300 hover:text-emerald-300">Cars</Link>
              <Link href="/client/services" className="text-gray-300 hover:text-emerald-300">Services</Link>
              <Link href="/client/pricing" className="text-gray-300 hover:text-emerald-300">Pricing</Link>
              <Link href="/client/contact" className="text-gray-300 hover:text-emerald-300">Contact</Link>
              <Link href="/client/blog" className="text-gray-300 hover:text-emerald-300">Blog</Link>
            </div>
            <div className="flex space-x-4 items-center">
              <button onClick={() => setUserMenu(!userMenu)} className="relative">
                <CircleUserRound className="text-4xl text-gray-300" />
                {userMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                    {user ? (
                      <>
                        <Link href="/client/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Your Profile</Link>
                        <button onClick={logout} className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100">Déconnexion</button>
                      </>
                    ) : (
                      <Link href="/client/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Connexion</Link>
                    )}
                  </div>
                )}
              </button>
              <Link href="/client/notifications" className="hover:text-gray-100">
                <BiBell className="text-3xl text-gray-300" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  3
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};
