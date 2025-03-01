import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Box } from '@mui/material';

const Agreement = () => {
const [formData, setFormData] = useState({
    partyOne: '',
    partyTwo: '',
    agreementDate: '',
    terms: '',
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    alert('Agreement Generated! (In future, this will generate a document)');
};

return (
    <Container maxWidth="md">
    <Paper elevation={3} sx={{ padding: 4, mt: 4, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
        Agreement Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField fullWidth label="Party One" name="partyOne" value={formData.partyOne} onChange={handleChange} required margin="normal" />
        <TextField fullWidth label="Party Two" name="partyTwo" value={formData.partyTwo} onChange={handleChange} required margin="normal" />
        <TextField fullWidth label="Agreement Date" name="agreementDate" type="date" InputLabelProps={{ shrink: true }} value={formData.agreementDate} onChange={handleChange} required margin="normal" />
        <TextField fullWidth label="Terms & Conditions" name="terms" value={formData.terms} onChange={handleChange} multiline rows={4} required margin="normal" />
        <Button fullWidth type="submit" variant="contained" sx={{ mt: 2, backgroundColor: '#1976D2' }}>
            Generate Agreement
        </Button>
        </Box>
    </Paper>
    </Container>
);
};

export default Agreement;
