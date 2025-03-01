import React, { useState } from 'react';
import { Typography, Grid, Card, CardContent, Box, Button } from '@mui/material';
import StorageIcon from '@mui/icons-material/Description';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArticleIcon from '@mui/icons-material/Article';
import GavelIcon from '@mui/icons-material/Gavel';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
const [selectedDoc, setSelectedDoc] = useState(null);
const navigate = useNavigate();

const documentTypes = [
    { id: 'contract', name: 'Contract', icon: <GavelIcon />, color: '#1E88E5' },
    { id: 'nda', name: 'Non-Disclosure Agreement (NDA)', icon: <AssignmentIcon />, color: '#43A047' },
    { id: 'lease', name: 'Lease Agreement', icon: <ArticleIcon />, color: '#FB8C00' },
];

const handleGenerateDocument = () => {
    if (selectedDoc) {
    navigate(`/generate-document/${selectedDoc}`);
    }
};

return (
    <Box textAlign="center">
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, color: '#333' }}>
        Welcome to Legal Vault
    </Typography>
    <Typography variant="subtitle1" sx={{ mb: 4, color: '#666' }}>
        Securely manage, verify, and store your legal documents on blockchain.
    </Typography>

      {/* Feature Cards */}
    <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={styles.featureCard}>
            <CardContent>
            <StorageIcon sx={styles.iconStyle('#1976D2')} />
            <Typography variant="h6" fontWeight="bold">Secure Storage</Typography>
            <Typography variant="body2" sx={{ mt: 1, color: '#666' }}>
                Store documents with encrypted IPFS storage.
            </Typography>
            </CardContent>
        </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Card sx={styles.featureCard}>
            <CardContent>
            <VerifiedIcon sx={styles.iconStyle('#2E7D32')} />
            <Typography variant="h6" fontWeight="bold">Blockchain Verification</Typography>
            <Typography variant="body2" sx={{ mt: 1, color: '#666' }}>
                Verify authenticity with blockchain smart contracts.
            </Typography>
            </CardContent>
        </Card>
        </Grid>
    </Grid>

      {/* Document Type Selection */}
    <Typography variant="h5" fontWeight="bold" sx={{ mt: 5, mb: 2 }}>
        Select Document Type
    </Typography>

    <Grid container spacing={3} justifyContent="center">
        {documentTypes.map((doc) => (
        <Grid item xs={12} sm={6} md={4} key={doc.id}>
            <Card
            sx={{
                ...styles.documentCard,
                border: selectedDoc === doc.id ? `3px solid ${doc.color}` : 'none',
                boxShadow: selectedDoc === doc.id ? `0px 0px 15px ${doc.color}` : styles.documentCard.boxShadow,
            }}
            onClick={() => setSelectedDoc(doc.id)}
            >
            <CardContent>
                {React.cloneElement(doc.icon, { sx: styles.iconStyle(doc.color) })}
                <Typography variant="h6" fontWeight="bold">{doc.name}</Typography>
            </CardContent>
            </Card>
        </Grid>
        ))}
    </Grid>

      {/* Generate Document Button */}
    <Button
        variant="contained"
        sx={{
        mt: 3,
        backgroundColor: selectedDoc ? '#1976D2' : '#B0BEC5',
        '&:hover': { backgroundColor: selectedDoc ? '#1565C0' : '#B0BEC5' },
        }}
        onClick={handleGenerateDocument}
        disabled={!selectedDoc}
    >
        Generate Document
    </Button>
    </Box>
);
};

export default Dashboard;

// ✅ STYLES
const styles = {
featureCard: {
    borderRadius: 3,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    padding: 2,
    transition: '0.3s',
    '&:hover': {
    boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
    },
},
documentCard: {
    borderRadius: 3,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    padding: 2,
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
    boxShadow: '0px 10px 20px rgba(0,0,0,0.3)',
    },
},
iconStyle: (color) => ({
    fontSize: 50,
    color,
    marginBottom: 1,
}),
};
