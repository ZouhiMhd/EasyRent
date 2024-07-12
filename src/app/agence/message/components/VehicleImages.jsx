'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VehicleImages = ({ vehiculeImmatriculation }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://192.168.0.65:9000/api/vehicules/ABC123/images");
        if (response.status === 200) {
          setImages(response.data);
          console.log(response.data);
        } else {
          console.error('Erreur lors de la récupération des images du véhicule:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchImages();
  }, [vehiculeImmatriculation]);

  return (
    <div>
      <h2>Images du véhicule</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <div key={index} style={{ marginRight: '10px', marginBottom: '10px' }}>
            <img src={`data:${image.type};base64,${image.imageData}`} alt={`Image ${index}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleImages;
