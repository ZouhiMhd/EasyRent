'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { FaCogs, FaGasPump } from 'react-icons/fa';
import { RiToolsLine } from 'react-icons/ri';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import EvStationIcon from '@mui/icons-material/EvStation';
import {car} from './datacar';
import { drivers } from './dataDrivers'
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';

const style={
  width:'50px',
   height:'50px',
   color: 'var(--blue)'
}
const text1={
  color:'black', 
  fontSize:"15px", 
  // color:'grey'
}
const text2={color:'black'}

const StyledForm = styled.form`
  max-width: 95%;
  margin: 0 auto;
  padding: 50px;
  padding-right: 30px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 7px 10px rgba(0.1, 0.1, 0.3, 0.2);

  label {
    font-weight: 600;
    color: #333;
  }

  input[type='text'],
  input[type='date'],
  select {
    width: 85%; /* Adjusted to full width */
    padding: 12px;
    margin-bottom: 1.1rem;
    border: 2px solid #7986CB; /* Bleu pastel */
    border-radius: 6px;
    font-size: 1rem;
    box-sizing: border-box;
    background-color: #f2f2f2; /* Gris clair */
    color: #333333; /* Gris foncé */
    font-weight: 600;
  }

  input[type='text']:focus,
  input[type='date']:focus,
  select:focus {
    border-color: #3949AB; /* Bleu foncé */
    outline: none;
  }

  ::placeholder {
    color: #9E9E9E; /* Gris moyen */
  }

  input[type='checkbox'],
  input[type='radio'] {
    margin-right: 0.5rem;
  }

  button[type='submit'] {
    width: 30%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
    display: block;
    margin: 0 auto;
    margin-top: 2rem;
  }

  button[type='submit']:hover {
    background-color: #45a049;
  }
`;

const OptionContainer = styled.div`
  margin-bottom: 1rem;

  label {
    margin-right: 1rem;
  }
`;

const FormSection = styled.div`
  flex: 1 1 300px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 1rem;

  @media (max-width: 600px) {
    flex: 1 1 100%;
  }
`;

const DriverContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const DriverCard = styled.div`
  text-align: center;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: calc(50% - 10px); /* Two cards per row on larger screens */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
  }
`;

const DriverName = styled.h3`
  color: black;
  font-size: 15px;
  margin-bottom: 5px;
`;

const DriverTel = styled.p`
  color: black;
`;

const LocationForm = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [rentalOptions, setRentalOptions] = useState('');
  const [selectedDriver, setSelectedDriver] = useState(null); // State to store the selected driver
  const [driverOptions, setDriverOptions] = useState('');
  const [withDriver, setWithDriver] = useState(false);
  const [rentalDates, setRentalDates] = useState({
    startDate: '',
    endDate: '',
  });
  const [FormData, setFormData] = useState('');

  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/Reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });

      if (response.ok) {
        console.log('Reservation submitted successfully!');
      } else {
        console.error('Error submitting reservation:', response.status);
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
    }
  };  const handleDriverSelect = (driver) => {
    setSelectedDriver(driver);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <FormSection>
          <label htmlFor="name">Nom du véhicule :</label>
          <input
            type="text"
            id="name"
            value={car[0].name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormSection>
        <FormSection>
          <label htmlFor="brand">Marque :</label>
          <input
            type="text"
            id="brand"
            value={car[0].brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </FormSection>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <FormSection>
          <label htmlFor="startDate">Date de début de location :</label>
          <input
            type="date"
            id="startDate"
            value={rentalDates.startDate}
            onChange={(e) =>
              setRentalDates({ ...rentalDates, startDate: e.target.value })
            }
            required
          />
        </FormSection>
        <FormSection>
          <label htmlFor="endDate">Date de fin de location :</label>
          <input
            type="date"
            id="endDate"
            value={rentalDates.endDate}
            onChange={(e) =>
              setRentalDates({ ...rentalDates, endDate: e.target.value })
            }
            required
          />
        </FormSection>
      </div>

        
      <FormSection>
        <OptionContainer>
          <label>Type de location :</label>
          <div>
            <label>
              <input
                type="radio"
                value="avec_chauffeur"
                checked={selectedOption === 'avec_chauffeur'}
                onChange={() => {
                  setSelectedOption('avec_chauffeur');
                  setSelectedDriver(null); // Reset selected driver when option changes
                }}
              />{' '}
              Avec chauffeur
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="sans_chauffeur"
                checked={selectedOption === 'sans_chauffeur'}
                onChange={() => {
                  setSelectedOption('sans_chauffeur');
                  setSelectedDriver(null); // Reset selected driver when option changes
                }}
              />{' '}
              Sans chauffeur
            </label>
          </div>
        </OptionContainer>
      </FormSection>

      {/* Display driver options if 'avec chauffeur' is selected */}
      {selectedOption === 'avec_chauffeur' && (
        <FormSection>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              py: 2,
              overflow: 'auto',
              width: '100%',
              scrollSnapType: 'x mandatory',
              '& > *': {
                scrollSnapAlign: 'center',
              },
              '::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {drivers.map((driver) => (
              <Card
                key={driver.name}
                onClick={() => handleDriverSelect(driver)}
                sx={{
                  borderRadius: 2,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: selectedDriver === driver ? '2px solid #3949AB' : 'none',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <FaUserCircle style={{ width: '90%', height: '80%', color: 'var(--blue)' }} />
                <Box sx={{ p: 2, flexGrow: 1 }}>
                  <Typography level="title-md" mb={1}>{driver.name}</Typography>
                  <Typography level="body-sm">{driver.tel}</Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </FormSection>
      )}
      

      {/* Rental options */}
      <FormSection>
        <OptionContainer>
          <label>Options de location :</label>
          <div>
            <label>
              <input
                type="radio"
                name="rental-option"
                value="par_heure"
                checked={rentalOptions === 'par_heure'}
                onChange={() => setRentalOptions('par_heure')}
              />
              Par heure
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="rental-option"
                value="par_jour"
                checked={rentalOptions === 'par_jour'}
                onChange={() => setRentalOptions('par_jour')}
              />
              Par jour
            </label>
          </div>
        </OptionContainer>
      </FormSection>

      {/* Submit button */}
      <button type="submit" onClick="/reservations">Réserver</button>
    </StyledForm>
  );
};



export default LocationForm;
