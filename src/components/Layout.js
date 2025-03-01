import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HelpIcon from '@mui/icons-material/Help';
import GavelIcon from '@mui/icons-material/Gavel';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#1E1E2F', color: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
        }}
      >
        {/* Logo Section */}
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <img src="/logo.png" alt="Leadvala Logo" style={{ width: '80px', marginBottom: '10px' }} />
        </Box>

        {/* Main Navigation (Dashboard & Documents) */}
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon sx={{ color: '#FFF' }}><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button component={Link} to="/documents">
            <ListItemIcon sx={{ color: '#FFF' }}><DescriptionIcon /></ListItemIcon>
            <ListItemText primary="My Documents" />
          </ListItem>
        </List>

        {/* Bottom Section (Additional Pages) */}
        <Box sx={{ mt: 'auto' }}>
          <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.2)', mb: 1 }} />

          <List>
            <ListItem button component={Link} to="/about">
              <ListItemIcon sx={{ color: '#FFF' }}><InfoIcon /></ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>

            <ListItem button component={Link} to="/contact">
              <ListItemIcon sx={{ color: '#FFF' }}><ContactMailIcon /></ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>

            <ListItem button component={Link} to="/help">
              <ListItemIcon sx={{ color: '#FFF' }}><HelpIcon /></ListItemIcon>
              <ListItemText primary="Help" />
            </ListItem>

            <ListItem button component={Link} to="/terms">
              <ListItemIcon sx={{ color: '#FFF' }}><GavelIcon /></ListItemIcon>
              <ListItemText primary="Terms & Conditions" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#F4F6F9', height: '100vh', padding: 5 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
