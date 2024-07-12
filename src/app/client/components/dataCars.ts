import car1 from '../../../../public/images/car-1.jpg';
import car2 from '../../../../public/images/car-2.jpg';
import car3 from '../../../../public/images/car-3.jpg';
import car5 from '../../../../public/images/car-5.jpg';
import car6 from '../../../../public/images/car-6.jpg';
import car7 from '../../../../public/images/car-7.jpg';
import car10 from '../../../../public/images/car-10.jpg';
import bg1 from '../../../../public/images/bg_1.jpg';
import client1 from '../../../../public/images/bg_1.jpg';
import axios from 'axios';
import Cars from '@/pages/Cars';

export const clientsList = [
  { photo: client1, name: 'Toyota', job: "Animateur" },
  { photo: car2, name: 'Honda', job: "Avocat" },
  { photo: car3, name: 'Ford', job: "Médecin " },
  { photo: car5, name: 'BMW', job: "pilote" },
];

interface Car {
  modele: string;
  marque: string;
  prix: number;
  img: ImageData;
}

export let carsList: Car[] = [];

async function combineCarsAndImages(immatriculation: string) {
    try {
      var carsResponse = await axios.get('http://192.168.0.65:9000/api/vehicules/available');
      var cars = carsResponse.data;
  
      // Map over the cars and fetch the images for each car
      carsList = await Promise.all(
        cars.map(async (car: { immatriculation: any; }) => {
          var imagesResponse = await axios.get(`http://192.168.0.65:9000/api/vehicules/${car.immatriculation}/images`);
          var images = imagesResponse.data;
  
          // Merge the car and image data
          return {
            ...car,
            images: images
          };
        })
      );  
      console.log(carsList);
      return carsList;
    } catch (error) {
      console.error(error);
      throw error;
    }
}

(async () => {
  await combineCarsAndImages('');
})();

export default carsList;
  // v ar carsList = [
//     {
//         photo: bg1,
//         nom: "Toyota",
//         marque: "Chevrolet",
//         mileage: "40,00",
//         transmission: "Manuel",
//         nbSiege: 5,
//         nbBagage: 4,
//         essence: "Pétrole",
//         prix: 6500
//     },
//     {
//         photo: car1,
//         nom: "Toyota",
//         marque: "Chevrolet",
//         mileage: "40,00",
//         transmission: "Automatique",
//         nbSiege: 5,
//         nbBagage: 4,
//         essence: "Pétrole",
//         prix: 5000
//     },
//     {
//         photo: car2,
//         nom: "Toyota",
//         marque: "Chevrolet",
//         mileage: "40,00",
//         transmission: "Manuel",
//         nbSiege: 5,
//         nbBagage: 4,
//         essence: "Pétrole",
//         prix: 5000
//     },
//     {
//         photo: car3,
//         nom: "Toyota",
//         marque: "Chevrolet",
//         mileage: "40,00",
//         transmission: "Manuel",
//         nbSiege: 5,
//         nbBagage: 4,
//         essence: "Pétrole",
//         prix: 10000
//     },
//     {
//         photo: car5,
//         nom: "Toyota",
//         marque: "Chevrolet",
//         mileage: "40,00",
//         transmission: "Manuel",
//         nbSiege: 5,
//         nbBagage: 4,
//         essence: "Pétrole",
//         prix: 8000
//     },
//     {
//         photo: car6,
//         nom: "Toyota",
//         marque: "Chevrolet",
//         mileage: "40,00",
//         transmission: "Manuel",
//         nbSiege: 5,
//         nbBagage: 4,
//         essence: "Pétrole",
//         prix: 5000
//     },
//     {
//         photo: car7,
//         nom: "Toyota",
//         marque: "Chevrolet",
//         mileage: "40,00",
//         transmission: "Manuel",
//         nbSiege: 5,
//         nbBagage: 4,
//         essence: "Pétrole",
//         prix: 15000
//     },
//     {
//         photo: car10,
//         nom: "Toyota",
//         marque: "Chevrolet",
//         mileage: "40,00",
//         transmission: "Manuel",
//         nbSiege: 5,
//         nbBagage: 4,
//         essence: "Pétrole",
//         prix: 5000
//     }
// ];
