import React from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const GenerateDocument = () => {
const { docType } = useParams();

return (
    <Box textAlign="center" sx={{ mt: 5 }}>
    <Typography variant="h4" fontWeight="bold">
        {docType.replace('_', ' ').toUpperCase()} Generator
    </Typography>
    <Typography variant="subtitle1" sx={{ mt: 2, color: '#555' }}>
        Document generation for {docType.replace('_', ' ')} is coming soon!
    </Typography>
    </Box>
);
};

export default GenerateDocument;
