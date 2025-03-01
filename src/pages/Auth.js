import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';

const Auth = ({ setIsAuthenticated }) => {
const [isSignup, setIsSignup] = useState(false);
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [aadhaar, setAadhaar] = useState('');
const [otp, setOtp] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

  const DEFAULT_OTP = '1234'; // Fixed OTP for now

  // Validate Phone Number
const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setPhone(value);
};

  // Validate Aadhaar Number
const handleAadhaarChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setAadhaar(value);
};

  // Handle Login & Signup
const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
    setError('Phone number must be 10 digits.');
    return;
    }

    if (isSignup) {
    if (!email.includes('@')) {
        setError('Enter a valid email.');
        return;
    }
    if (aadhaar.length !== 12) {
        setError('Aadhaar number must be 12 digits.');
        return;
    }
    }

    if (otp !== DEFAULT_OTP) {
    setError('Invalid OTP. Try again.');
    return;
    }

    // ✅ Store user authentication status
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('phone', phone);
    setIsAuthenticated(true);

    // ✅ Redirect to Dashboard
    navigate('/');
};

return (
    <Container maxWidth="xs">
    <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', mt: 10 }}>
        <Typography variant="h5" fontWeight="bold">
        {isSignup ? 'Create an Account' : 'Login to Legal Vault'}
        </Typography>

        {error && <Typography color="error">{error}</Typography>}

        <form onSubmit={handleSubmit}>
        <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            margin="normal"
            value={phone}
            onChange={handlePhoneChange}
            required
            inputProps={{ maxLength: 10 }}
        />

        {isSignup && (
            <>
            <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <TextField
                fullWidth
                label="Aadhaar Number"
                variant="outlined"
                margin="normal"
                value={aadhaar}
                onChange={handleAadhaarChange}
                required
                inputProps={{ maxLength: 12 }}
            />
            </>
        )}

        <TextField
            fullWidth
            label="Enter OTP (Default: 1234)"
            variant="outlined"
            margin="normal"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            inputProps={{ maxLength: 4 }}
        />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#1976D2' }}>
            {isSignup ? 'Sign Up' : 'Login'}
        </Button>
        </form>

        <Box sx={{ mt: 2 }}>
        <Typography variant="body2">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <Button color="primary" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Login' : 'Sign Up'}
            </Button>
        </Typography>
        </Box>
    </Paper>
    </Container>
);
};

export default Auth;
