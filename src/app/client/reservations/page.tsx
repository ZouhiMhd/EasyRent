'use client'

import React from 'react'
import { useEffect, useState } from 'react';

interface ReservationData {
  name: string;
  brand: string;
}

const ReservationItem: React.FC<ReservationData> = ({ name, brand }) => {
  return (
    <div className="reservation-item shadow-md rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300">
      <h3 className="reservation-name text-lg font-bold">{name}</h3>
      <p className="reservation-brand text-gray-600">1 {brand}</p>
    </div>
  );
};

const page = () => {
  const [reservationsData, setReservationsData] = useState<ReservationData[]>([]);

  useEffect(() => {
    const fetchReservationsData = async (id : number) => {
      try {
        const response = await fetch(`http://192.168.0.65:9000/api/clients/${id}/reservations`);
        if (response.ok) {
          const data = await response.json();
          setReservationsData(data);
        } else {
          console.error('Erreur lors de la récupération des données :', response.status);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchReservationsData(1);
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="page-title text-3xl font-bold mb-8">Données de Reservations</h1>
      <div className="reservations-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reservationsData.map((data, index) => (
          <ReservationItem key={index} {...data} />
        ))}
      </div>
    </div>
  );
};
export default page