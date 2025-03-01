import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Box } from '@mui/material';

const NDA = () => {
const [formData, setFormData] = useState({
    disclosingParty: '',
    receivingParty: '',
    ndaDate: '',
    confidentialityTerms: '',
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    alert('NDA Generated! (In future, this will generate a document)');
};

return (
    <Container maxWidth="md">
    <Paper elevation={3} sx={{ padding: 4, mt: 4, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
        Non-Disclosure Agreement (NDA)
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField fullWidth label="Disclosing Party" name="disclosingParty" value={formData.disclosingParty} onChange={handleChange} required margin="normal" />
        <TextField fullWidth label="Receiving Party" name="receivingParty" value={formData.receivingParty} onChange={handleChange} required margin="normal" />
        <TextField fullWidth label="Agreement Date" name="ndaDate" type="date" InputLabelProps={{ shrink: true }} value={formData.ndaDate} onChange={handleChange} required margin="normal" />
        <TextField fullWidth label="Confidentiality Terms" name="confidentialityTerms" value={formData.confidentialityTerms} onChange={handleChange} multiline rows={4} required margin="normal" />
        <Button fullWidth type="submit" variant="contained" sx={{ mt: 2, backgroundColor: '#1976D2' }}>
            Generate NDA
        </Button>
        </Box>
    </Paper>
    </Container>
);
};

export default NDA;
