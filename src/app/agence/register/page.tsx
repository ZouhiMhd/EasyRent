'use client'

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, Stack } from '@mui/material';
import Image from 'next/image';
import { useAuth } from '../utils/auth';
import '../globals.css';

const styleContainer = {
  width: "95%",
  background: 'var(--light)',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  margin: '15px auto',
  padding: "20px",
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};

const center = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
};

const heroSection = {
  position: 'relative',
  height: '400px',
  color: 'var(--blue)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '20px',
  borderRadius: '10px',
  margin: '15px auto',
  width: '95%',
  overflow: 'hidden'
};

const backgroundImage = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'blur(8px)',
  zIndex: -1
};

const overlay = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: -1
};

const Page = () => {
  const { register } = useAuth(); // Utilisation de la fonction d'inscription depuis le contexte d'authentification

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [agencyname, setAgencyname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password); // Appel à la fonction d'inscription avec email et mot de passe
      // Redirection ou autre logique après l'inscription réussie
    } catch (error) {
      setError('Erreur lors de l\'inscription'); // Gestion des erreurs d'inscription
      console.error('Erreur lors de l\'inscription :', error);
    }
  };

  return (
    <div>
      <Box sx={heroSection}>
        <Box sx={backgroundImage} component="img" src="/images/v3.png" alt="Background Image" />
        <Box sx={overlay}></Box>
        <Typography variant="h2" component="h1">Bienvenue sur notre plateforme</Typography>
        <Typography variant="h6">Inscrivez-vous pour gérer votre agence de location de véhicules</Typography>
      </Box>

      <Box sx={styleContainer}>
        <Typography variant="h4" sx={center}>Inscription</Typography>
        <form onSubmit={handleRegister} style={formStyle}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="AgencyName"
            type="text"
            value={agencyname}
            onChange={(e) => setAgencyname(e.target.value)}
            fullWidth
            variant="outlined"
            required
          />

           <TextField
            label="Email"
            type="email"
            value={username}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            variant="outlined"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ height: '50px', borderRadius: '10px', fontSize: '20px', marginTop: '10px' }}
          >
            S'inscrire
          </Button>
        </form>
      </Box>

    </div>
  );
};

export default Page;
