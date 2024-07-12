'use client'

import React, { useEffect, useState } from 'react';
// import type { NextPage } from 'next';
import { useAuth } from '@/contexts/authContext';

interface Notification {
    id: number;
    message: string;
    read: boolean;
  }
  
const page = () => {
    const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Simuler l'appel à une API pour récupérer les notifications de l'utilisateur
    if (user) {
      const fetchedNotifications = [
        { id: 1, message: 'Welcome to EasyRent!', read: false },
        { id: 2, message: 'Your booking has been confirmed.', read: false },
        { id: 3, message: 'New cars have been added to our fleet.', read: true },
      ];
      setNotifications(fetchedNotifications);
    }
  }, [user]);
  const markAsRead = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold">Please log in to view your notifications.</h2>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col items-center">
      <div className="w-full max-w-2xl p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>
        {notifications.length === 0 ? (
          <p className="text-gray-500">No notifications available.</p>
        ) : (
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`p-4 rounded-md ${
                  notification.read ? 'bg-gray-200' : 'bg-blue-100'
                }`}
              >
                <p className="text-gray-700">{notification.message}</p>
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="mt-2 text-sm text-blue-500 hover:underline"
                  >
                    Mark as read
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default page