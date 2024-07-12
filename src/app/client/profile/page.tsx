import React from 'react'
import { useAuth } from '@/contexts/authContext';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';


 

const page = () => {
  // const { user, logout } = useAuth();

  // if (!user) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //       <h2 className="text-2xl font-bold">Please log in to view your profile.</h2>
  //     </div>
  //   );
  // }
  const user={
    name:"John Doe",
    mail:"noname@gmail.com"
  }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div className="flex items-center space-x-5">
            <div className="h-14 w-14 bg-gray-100 rounded-full flex-shrink-0">
              <FaUserCircle className="h-full w-full text-blue-500 rounded-full object-cover" />
            </div>

            <div>
              <h1 className="text-2xl font-semibold">{user.name}</h1>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="text-gray-600">Email: {user.email}</p>
          </div>
          <div className="mt-8 flex justify-between">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Edit Profile
            </button>
            <Link href="/notifications" className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
              
                Notifications
              
            </Link>
            <button 
            // onClick={logout} 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page