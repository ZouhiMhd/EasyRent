import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';

export default function FuelPrice({ initialEssencePrice, initialDieselPrice, onUpdate }) {
  const [fuelPrices, setFuelPrices] = useState({
    essence: '',
    diesel: '',
  });

  useEffect(() => {
    setFuelPrices({
      essence: `${initialEssencePrice} franc CFA/Litre `,
      diesel: `${initialDieselPrice} franc CFA/Litre`,
    });
  }, [initialEssencePrice, initialDieselPrice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFuelPrices({ ...fuelPrices, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(fuelPrices);
    setFuelPrices({
      essence: `fuek ${initialEssencePrice}`,
      diesel: `fuek ${initialDieselPrice}`,
    });
  };

  return (
    <Box 
      sx={{
        width: "95%",
        background: 'var(--light)',
        borderRadius: '10px',
        margin: '15px auto',
        padding: "20px",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
        Mettre à jour les prix des carburants
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField 
            label="Prix de l'essence"
            variant="outlined" 
            type="text" 
            name="essence" 
            value={fuelPrices.essence} 
            onChange={handleChange} 
            fullWidth 
          />
          <TextField 
            label="Prix du diesel" 
            variant="outlined" 
            type="text" 
            name="diesel" 
            value={fuelPrices.diesel} 
            onChange={handleChange} 
            fullWidth 
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ height: '50px', borderRadius: '10px', fontSize: '20px' }}
          >
            Mettre à jour
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
