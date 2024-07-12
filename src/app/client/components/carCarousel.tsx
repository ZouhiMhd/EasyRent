'use client'
// components/CarCarousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
import { Vehicule } from './vehicule';
import Image, { StaticImageData } from 'next/image';
import carsList from './image.ts';

interface VehiculeProps {
  imgpath: StaticImageData;
  modele: string;
  marque: string;
  prix: number;
}

interface Car extends VehiculeProps {
  // add any additional properties here
}

const CarCarousel: React.FC = () => {
  return (
    <div className=" container mx-auto py-8 ">
      <div className='content text-blue-500 text-center pt-6'>
          <h4>Nos voitures</h4>
      </div>
      <Swiper
      
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={25}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{delay:6000 ,disableOnInteraction:false}}
        breakpoints={{
          1024: { slidesPerView: 3 },
          800: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
    {carsList.map((car: Car, index: number) => (
      <SwiperSlide key={index} style={{display:"flex", alignItems:"row", padding:"50px"}}>
        <Vehicule imgpath={car.photo} modele={car.nom} prix={car.prix} />
      </SwiperSlide>
    ))}
      </Swiper>
    </div>
  );
};

export default CarCarousel;
