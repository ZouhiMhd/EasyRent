import car1 from '../../../../public/images/car-1.jpg';
import car2 from '../../../../public/images/car-2.jpg';
import car3 from '../../../../public/images/car-3.jpg';
import car5 from '../../../../public/images/car-5.jpg';
import car6 from '../../../../public/images/car-6.jpg';
import car7 from '../../../../public/images/car-7.jpg';
import car10 from '../../../../public/images/car-10.jpg';
import bg1 from '../../../../public/images/bg_1.jpg';
import client1 from '../../../../public/images/bg_1.jpg';

export const clientsList = [
  { photo: client1, name: 'Toyota', job: "Animateur" },
  { photo: car2, name: 'Honda', job: "Avocat" },
  { photo: car3, name: 'Ford', job: "Médecin " },
  { photo: car5, name: 'BMW', job: "pilote" },
];


const carsList = [
    {
        photo: bg1,
        nom: "Toyota",
        mileage: "40,00",
        transmission: "Manuel",
        nbSiege: 5,
        nbBagage: 4,
        essence: "Pétrole",
        prix: 6500
    },
    {
        photo: car1,
        nom: "Toyota",
        mileage: "40,00",
        transmission: "Automatique",
        nbSiege: 5,
        nbBagage: 4,
        essence: "Pétrole",
        prix: 5000
    },
    {
        photo: car2,
        nom: "Toyota",
        mileage: "40,00",
        transmission: "Manuel",
        nbSiege: 5,
        nbBagage: 4,
        essence: "Pétrole",
        prix: 5000
    },
    {
        photo: car3,
        nom: "Toyota",
        mileage: "40,00",
        transmission: "Manuel",
        nbSiege: 5,
        nbBagage: 4,
        essence: "Pétrole",
        prix: 10000
    },
    {
        photo: car5,
        nom: "Toyota",
        mileage: "40,00",
        transmission: "Manuel",
        nbSiege: 5,
        nbBagage: 4,
        essence: "Pétrole",
        prix: 8000
    },
    {
        photo: car6,
        nom: "Toyota",
        mileage: "40,00",
        transmission: "Manuel",
        nbSiege: 5,
        nbBagage: 4,
        essence: "Pétrole",
        prix: 5000
    },
    {
        photo: car7,
        nom: "Toyota",
        mileage: "40,00",
        transmission: "Manuel",
        nbSiege: 5,
        nbBagage: 4,
        essence: "Pétrole",
        prix: 15000
    },
    {
        photo: car10,
        nom: "Toyota",
        mileage: "40,00",
        transmission: "Manuel",
        nbSiege: 5,
        nbBagage: 4,
        essence: "Pétrole",
        prix: 5000
    }
];


// api.js
export const fetchVehicles = async () => {
    try {
      const response = await fetch('http://192.168.0.65:9000/api/vehicules/availables');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch vehicles:", error);
      return [];
    }
  };

export default carsList;