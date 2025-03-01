import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';

const Auth = ({ setIsAuthenticated }) => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate OTP (Default is 1234 for now)
    if (otp === '1234') {
      setIsAuthenticated(true);  // Ensure this function is correctly passed from parent
      navigate('/dashboard');
    } else {
      alert('Invalid OTP! Please try again.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, mt: 5, borderRadius: 3, textAlign: 'center' }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Login to Legal Vault
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <TextField
            fullWidth
            label="Enter OTP (Default: 1234)"
            variant="outlined"
            margin="normal"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2, backgroundColor: '#1976D2' }}>
            LOGIN
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Auth;
