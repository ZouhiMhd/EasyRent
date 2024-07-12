'use client'

// components/CarCarousel.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaUserCircle } from 'react-icons/fa';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';

const ClientCarousel: React.FC = () => {
  
  const [clientsList, setClientsList] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.65:9000/api/clients')
      .then(response => response.json())
      .then(data => setClientsList(data))
      .catch(error => console.error('Erreur lors de la récupération des agences:', error));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={25}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          600: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
      <div className="vehicule shadow-sm mt-4  m-25 p-10 items-center  justify-center ">
        {clientsList.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full p-2 rounded-full justify-center items-center h-20 w-20 ">
                <FaUserCircle className="h-full w-full text-blue-500 rounded-full object-cover" />
              {/* <Image src={client.photo} alt={client.name}  className="w-[50%] rounded-[100%] h-32 items-center justify-center" /> */}
              {/* layout="fill" objectFit="cover" */}
                </div>
                <div className="features p-4 bg-white  ">
                  <h3 className="text-lg font-semibold">{client.name}</h3>
                  {/* <div className="mt-2">
                    <p className="price text-xl font-bold">{client.job}</p>
                  </div> */}
                  <div className="boutons mt-4 flex text-center">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum repellendus ullam facere distinctio nihil, reiciendis animi quisquam provident, expedita, necessitatibus repellat earum. Voluptates velit amet repellendus enim temporibus ratione iste!
                  
                  </p>
              </div>
            </div>
        
          </SwiperSlide>
        ))} 
        </div>
      </Swiper>
    </div>
  );
};

export default ClientCarousel;
