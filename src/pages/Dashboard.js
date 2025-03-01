import React, { useState } from 'react';
import { Typography, Grid, Card, CardContent, Box, Button, TextField, List, ListItem, ListItemText, MenuItem, Select } from '@mui/material';
import StorageIcon from '@mui/icons-material/Description';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArticleIcon from '@mui/icons-material/Article';
import GavelIcon from '@mui/icons-material/Gavel';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from 'react-router-dom';
import Chatbot from '../components/Chatbot'; // Chatbot remains in the dashboard
import './Dashboard.css'; // Ensure styles exist

const Dashboard = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [collaborators, setCollaborators] = useState([]);
  const [newCollaborator, setNewCollaborator] = useState('');
  const [role, setRole] = useState('Viewer'); // Default role
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

  const addCollaborator = () => {
    if (/^\d{10}$/.test(newCollaborator)) { // Validate 10-digit phone number
      setCollaborators([...collaborators, { phone: newCollaborator, role }]);
      setNewCollaborator('');
      setRole('Viewer'); // Reset to default role
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <Box textAlign="center" className="dashboard-container">
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, color: '#333' }}>
        Welcome to Legal Vault
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, color: '#666' }}>
        Securely manage, verify, and collaborate on your legal documents with blockchain.
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

      {/* Multi-User Collaboration Section */}
      <Box sx={{ mt: 5, p: 3, borderRadius: 3, boxShadow: '0px 5px 10px rgba(0,0,0,0.1)', background: '#F9F9F9' }}>
        <Typography variant="h5" fontWeight="bold">Collaborate with Others</Typography>
        <Typography variant="subtitle1" sx={{ mb: 2, color: '#666' }}>
          Invite team members to collaborate on your legal documents.
        </Typography>

        {/* Add Collaborator Input */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 3 }}>
          <TextField
            label="Enter 10-digit phone number"
            variant="outlined"
            value={newCollaborator}
            onChange={(e) => setNewCollaborator(e.target.value)}
            sx={{ width: '250px' }}
          />
          <Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            variant="outlined"
            sx={{ width: '150px' }}
          >
            <MenuItem value="Viewer">Viewer</MenuItem>
            <MenuItem value="Editor">Editor</MenuItem>
            <MenuItem value="Signer">Signer</MenuItem>
          </Select>
          <Button
            variant="contained"
            startIcon={<PersonAddIcon />}
            onClick={addCollaborator}
            sx={{ backgroundColor: '#43A047', '&:hover': { backgroundColor: '#388E3C' } }}
          >
            Add
          </Button>
        </Box>

        {/* Collaborators List */}
        {collaborators.length > 0 && (
          <List>
            {collaborators.map((collab, index) => (
              <ListItem key={index}>
                <ListItemText primary={`📱 ${collab.phone}`} secondary={`Role: ${collab.role}`} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>

      {/* Chatbot in Bottom Right */}
      <Chatbot />
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
