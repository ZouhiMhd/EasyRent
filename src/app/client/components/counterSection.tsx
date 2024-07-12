'use client'

// components/CounterSection.tsx
import React, { useState, useEffect } from 'react';

const CounterSection: React.FC = () => {
  const [agencesList, setAgencesList] = useState([]);
  const [vehiclesList, setVehiculesList] = useState([]);
  const [clientsList, setClientsList] = useState([]);
  const startYear = 2024; // année de début de l'expérience
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - startYear;

  useEffect(() => {
    fetch('http://192.168.0.65:9000/api/vehicules')
      .then(response => response.json())
      .then(data => setVehiculesList(data))
      .catch(error => console.error('Erreur lors de la récupération des vehicules:', error));
  }, []);

  useEffect(() => {
    fetch('http://192.168.0.65:9000/api/clients')
      .then(response => response.json())
      .then(data => setClientsList(data))
      .catch(error => console.error('Erreur lors de la récupération des clients:', error));
  }, []);

  useEffect(() => {
    fetch('http://192.168.0.65:9000/api/agences')
      .then(response => response.json())
      .then(data => setAgencesList(data))
      .catch(error => console.error('Erreur lors de la récupération des agences:', error));
  }, []);

  const counters = [
    { number: yearsExperience, label: "Years Experience" },
    { number: vehiclesList.length, label: "Total Vehicles" },
    { number: clientsList.length, label: "Total Clients" },
    { number: agencesList.length, label: "Total Agences" },
  ];

  return (
    <section className="relative bg-cover bg-center bg-blue-100" id="section-counter">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div key={index} className="flex justify-center items-center flex-col text-black">
              <div className="text-4xl font-bold">{counter.number}</div>
              <div className="text-center">
                <span className="block">{counter.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
