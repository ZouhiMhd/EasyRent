'use client'

import React from 'react'
import type { NextPage } from "next";
import { useState } from "react";
import { login } from './slices/authSlice';
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';
import { useRouter } from "next/router";
// import About from "../about";
import { useAuth } from '@/contexts/authContext';

const page = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    // const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simule une authentification simple
        const user = { name: name, email: email };
        login(user);
        router.push('/profile');
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
                        Se connecter sur EasyRent
                    </Typography>
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Mot de passe"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}
                        sx={{ marginTop: '1.5rem' }}
                    >
                        Se connecter
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