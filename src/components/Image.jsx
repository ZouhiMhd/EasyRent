'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from "@/components/config_api.js";

const Image = ({ endpoint, id}) => {
    const [image, setImage] = useState(null);
    // console.log(endpoint);
    useEffect(() => {
      const fetchImage = async () => {
        try {
          const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
          if (response.status === 200) {
            setImage(response.data[0]); // Supposant que vous récupérez la première image du tableau
          } else {
            console.error('Erreur lors de la récupération de l\'image:', response.statusText);
          }
        } catch (error) {
          console.error('Erreur:', error);
        }
      };
  
      fetchImage();
    }, [id]);
    // console.log(image)


  return (
    <>
        {image && (
          <div style={{ marginRight: '10px', marginBottom: '10px' }}>
            <img src={`data:${image.type};base64,${image.imageData}`} alt={`Image ${image.id}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </div>
        )}
    </>
  );
};

export default Image;
