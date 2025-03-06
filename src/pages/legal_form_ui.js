import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import { jsPDF } from 'jspdf';

const LegalForm = ({ title, fields, defaultValues }) => {
  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(title, 20, 20);
    doc.setFontSize(12);
    let yOffset = 40;
    Object.keys(formData).forEach((key) => {
      doc.text(`${key}: ${formData[key]}`, 20, yOffset);
      yOffset += 10;
    });
    doc.save(`${title}.pdf`);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper sx={{ p: 4, boxShadow: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>{title}</Typography>
        {fields.map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        ))}
        <Button variant="contained" sx={{ mt: 3 }} onClick={generatePDF}>
          Download as PDF
        </Button>
      </Paper>
    </Container>
  );
};

export const ContractForm = () => (
  <LegalForm
    title="Contract Agreement"
    fields={[{ name: 'partyA', label: 'Party A Name' }, { name: 'partyB', label: 'Party B Name' }, { name: 'terms', label: 'Contract Terms' }]}
    defaultValues={{ partyA: '', partyB: '', terms: '' }}
  />
);

export const NDAForm = () => (
  <LegalForm
    title="Non-Disclosure Agreement (NDA)"
    fields={[{ name: 'disclosingParty', label: 'Disclosing Party' }, { name: 'receivingParty', label: 'Receiving Party' }, { name: 'confidentialInfo', label: 'Confidential Information' }]}
    defaultValues={{ disclosingParty: '', receivingParty: '', confidentialInfo: '' }}
  />
);

export const LeaseAgreementForm = () => (
  <LegalForm
    title="Lease Agreement"
    fields={[{ name: 'landlord', label: 'Landlord Name' }, { name: 'tenant', label: 'Tenant Name' }, { name: 'leaseTerms', label: 'Lease Terms' }]}
    defaultValues={{ landlord: '', tenant: '', leaseTerms: '' }}
  />
);
