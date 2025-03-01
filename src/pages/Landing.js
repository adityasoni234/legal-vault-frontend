import React from 'react';
import { Container, Typography, Button, Grid, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PeopleIcon from '@mui/icons-material/People';
import GavelIcon from '@mui/icons-material/Gavel';

const Landing = () => {
return (
    <Box sx={{ backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
      {/* Hero Section */}
    <Box sx={{ textAlign: 'center', py: 10, background: 'linear-gradient(135deg, #1E1E2F, #3B3B98)', color: '#FFF' }}>
        <Typography variant="h2" fontWeight="bold">
        Welcome to Legal Vault
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, opacity: 0.8 }}>
        Secure, Verify, and Manage Your Legal Documents on Blockchain
        </Typography>
        <Button
        component={Link}
        to="/auth"
        variant="contained"
        sx={{ mt: 4, backgroundColor: '#FFC107', color: '#000', fontWeight: 'bold', fontSize: '18px' }}
        >
        Get Started
        </Button>
    </Box>

      {/* Features Section */}
    <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Why Choose Legal Vault?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
        {[
            { title: 'Secure Storage', icon: <CloudUploadIcon />, text: 'Store your documents with encrypted IPFS storage.' },
            { title: 'Blockchain Verification', icon: <VerifiedUserIcon />, text: 'Ensure authenticity with blockchain technology.' },
            { title: 'Smart Contracts', icon: <GavelIcon />, text: 'Automate agreements securely with smart contracts.' },
            { title: 'User-Friendly', icon: <PeopleIcon />, text: 'Easily manage and share your legal documents.' },
        ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 8px 20px rgba(0,0,0,0.2)' } }}>
                <Box sx={{ fontSize: 50, color: '#1976D2', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" fontWeight="bold">{feature.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1, opacity: 0.7 }}>{feature.text}</Typography>
            </Paper>
            </Grid>
        ))}
        </Grid>
    </Container>

      {/* How It Works Section */}
    <Box sx={{ py: 8, backgroundColor: '#FFF' }}>
        <Container>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
            How It Works
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
            { step: '1', title: 'Sign Up', text: 'Create an account with your phone number.' },
            { step: '2', title: 'Upload Documents', text: 'Store legal documents with encrypted security.' },
            { step: '3', title: 'Verify on Blockchain', text: 'Ensure authenticity using smart contracts.' },
            { step: '4', title: 'Manage & Share', text: 'Easily access and share documents securely.' },
            ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
                <Typography variant="h4" fontWeight="bold" color="primary">{item.step}</Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1, opacity: 0.7 }}>{item.text}</Typography>
                </Paper>
            </Grid>
            ))}
        </Grid>
        </Container>
    </Box>

      {/* Testimonials */}
    <Box sx={{ py: 8, background: '#F4F6F9' }}>
        <Container>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
            What Our Users Say
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
            { name: 'Aman Sharma', text: 'Legal Vault has revolutionized how I manage my legal documents. Highly secure and easy to use!' },
            { name: 'Priya Verma', text: 'The blockchain verification feature gives me peace of mind about document authenticity.' },
            { name: 'Rohit Kumar', text: 'User-friendly interface and great security features. Highly recommended!' },
            ].map((user, index) => (
            <Grid item xs={12} sm={4} key={index}>
                <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>"{user.text}"</Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>{user.name}</Typography>
                </Paper>
            </Grid>
            ))}
        </Grid>
        </Container>
    </Box>

      {/* Call-To-Action */}
    <Box sx={{ textAlign: 'center', py: 8, background: '#1976D2', color: '#FFF' }}>
        <Typography variant="h4" fontWeight="bold">Start Using Legal Vault Today!</Typography>
        <Button component={Link} to="/auth" variant="contained" sx={{ mt: 3, backgroundColor: '#FFC107', color: '#000', fontWeight: 'bold', fontSize: '18px' }}>
        Get Started Now
        </Button>
    </Box>

      {/* Footer */}
    <Box sx={{ textAlign: 'center', py: 3, backgroundColor: '#1E1E2F', color: '#FFF' }}>
        <Typography variant="body2">© 2025 Legal Vault. All rights reserved.</Typography>
    </Box>
    </Box>
);
};

export default Landing;
