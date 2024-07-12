import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
import { API_BASE_URL } from "@/components/config_api.js";

const style1 = {
  width: "95%",
  background: 'var(--light)',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  margin: '15px',
  padding: "20px"
};

const center = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const Agence = ({ name, localisation, id, description }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/postes/${id}/images`);
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
console.log(image)
  return (
    <div>
      <div style={style1}>
        <h3 style={center}>{name}</h3>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%', padding: '20px' }}>
            <LocationOnIcon />{localisation}
            {image && (
              <Stack direction="row" spacing={2}>
                <img src={`data:${image.type};base64,${image.imageData}`} alt={`Image ${image.id}`} style={{ width: '100%', height: 'auto', padding: '20px' }} />
              </Stack>
            )}
          </div>
          <div style={{ width: '50%', padding: '20px' }}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agence;
