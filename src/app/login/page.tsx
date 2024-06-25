'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/auth';
import { Stack, Box, Typography, TextField, Button, Alert } from '@mui/material';
import Image from 'next/image';
import 'boxicons/css/boxicons.css'
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

const page = () => {
    // const router = useRouter();
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            router.push('/dashboard');
        } catch (error) {
            setError('Adresse email ou mot de passe incorrect');
            console.error('Erreur lors de la connexion :', error);
        }
    };

    return (
        <div>
            <Box sx={heroSection}>
                <Box sx={backgroundImage} component="img" src="/images/v3.png" alt="Background Image" />
                <Box sx={overlay}></Box>
                <Typography variant="h2" component="h1">Bienvenue sur notre plateforme</Typography>
                <Typography variant="h6">Simplifiez la gestion de votre agence de location de véhicules</Typography>
            </Box>
           
            <Box sx={styleContainer}>
                <Typography variant="h4" sx={center}>Connexion</Typography>
            </Box>
            <div style={{display:'flex'}}>
            
            <Box sx={styleContainer} style={{width:'45%'}}>
                <form onSubmit={handleLogin} style={formStyle}>
                    {error && <Alert severity="error">{error}</Alert>}
                    <TextField 
                        label="Email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        fullWidth 
                        variant="outlined" 
                    />
                    <TextField 
                        label="Mot de passe" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        fullWidth 
                        variant="outlined" 
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        sx={{ height: '50px', borderRadius: '10px', fontSize: '20px' }}
                    >
                        Se connecter
                    </Button>
                </form>
            </Box>
            <Box sx={styleContainer} style={{width:'45%'}}>
                <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center', height: '160px' }}>
                    <Image src='/banners/car.jpg' alt="Car Banner" width={500} height={160} />
                </Stack>
            </Box>
            </div>
        </div>
    );
};

export default page;
