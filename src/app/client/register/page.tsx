'use client'

import React from 'react'
import { useState } from "react";
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';
import { useRouter } from "next/router";
import axios from "axios";

const page = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [sexe, setSexe] = useState('');
    
    // const router = useRouter();
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://192.168.0.65:9000/api/clients', {
                name: name,
                email: email,
                password: password,
                sexe: sexe,
                phone: phone
            });
            console.log("response =", response.data);
            
            // Assuming you want to redirect only on successful submission
            router.push('/login');
        } catch (error) {
            console.error('Erreur:', error);
            console.log("Connexion de l'utilisateur impossible");
        }
    };
  return (
    <Grid container spacing={0}>
            <Grid item xs={6}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                        backgroundColor: '#f5f5f5',
                        padding: '6rem',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                        borderRadius: '10px',
                        border: '1px solid #ddd',
                        marginTop: '1rem',
                        marginBottom: '1rem',
                    }}
                >
                    <img src="../../images/logo.jpg" alt="Logo" style={{ width: '300px', marginBottom: '0.5rem' }} /> {/* Logo centré au-dessus */}
                    <Typography variant="h5" component="h1" gutterBottom>
                        S'Enregistrer sur EasyRent
                    </Typography>
                    <TextField
                        label="Nom"
                        fullWidth
                        type="text"
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        type="text"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Mot de passe"
                        type="text"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        label="Telephone"
                        type="text"
                        fullWidth
                        margin="normal"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <TextField
                        label="Sexe"
                        type="text"
                        fullWidth
                        margin="normal"
                        value={sexe}
                        onChange={(e) => setSexe(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}
                        sx={{ marginTop: '1.5rem' }}
                    >
                        S'Enregistrer
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100vh',
                        backgroundImage: 'url("../../images/car-1.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
                        border: '1px solid #ddd',
                        marginTop: '1rem',
                        marginBottom: '1rem',
                    }}
                />
            </Grid>
        </Grid>
  )
}

export default page