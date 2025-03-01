import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Box } from '@mui/material';

const LeaseAgreement = () => {
const [formData, setFormData] = useState({
    landlord: '',
    tenant: '',
    leaseStartDate: '',
    leaseEndDate: '',
    rentAmount: '',
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    alert('Lease Agreement Generated! (In future, this will generate a document)');
};

return (
    <Container maxWidth="md">
    <Paper elevation={3} sx={{ padding: 4, mt: 4, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
        Lease Agreement
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField fullWidth label="Landlord Name" name="landlord" value={formData.landlord} onChange={handleChange} required margin="normal" />
        <TextField fullWidth label="Tenant Name" name="tenant" value={formData.tenant} onChange={handleChange} required margin="normal" />
        <TextField fullWidth label="Lease Start Date" name="leaseStartDate" type="date" InputLabelProps={{ shrink: true }} value={formData.leaseStartDate} onChange={handleChange} required margin="normal" />
        <TextField fullWidth label="Lease End Date" name="leaseEndDate" type="date" InputLabelProps={{ shrink: true }} value={formData.leaseEndDate} onChange={handleChange} required margin="normal" />
        <TextField fullWidth label="Monthly Rent Amount" name="rentAmount" value={formData.rentAmount} onChange={handleChange} required margin="normal" />
        <Button fullWidth type="submit" variant="contained" sx={{ mt: 2, backgroundColor: '#1976D2' }}>
            Generate Lease Agreement
        </Button>
        </Box>
    </Paper>
    </Container>
);
};

export default LeaseAgreement;
