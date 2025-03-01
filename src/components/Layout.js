import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';

const drawerWidth = 260;

const Layout = ({ children }) => {
return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />

      {/* Sidebar */}
    <Drawer
        variant="permanent"
        sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'linear-gradient(135deg, #1E1E2F, #3A3A55)',
            color: '#fff',
            borderRight: '1px solid rgba(255, 255, 255, 0.2)',
            transition: '0.3s ease-in-out',
        },
        }}
    >
        <Toolbar />
        <List>
        <ListItem
            button
            component={Link}
            to="/"
            sx={{
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
            padding: '15px 20px',
            }}
        >
            <ListItemIcon sx={{ color: 'white' }}>
            <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color: 'white', fontSize: '18px' }} />
        </ListItem>

        <ListItem
            button
            component={Link}
            to="/documents"
            sx={{
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
            padding: '15px 20px',
            }}
        >
            <ListItemIcon sx={{ color: 'white' }}>
            <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="My Documents" sx={{ color: 'white', fontSize: '18px' }} />
        </ListItem>
        </List>
    </Drawer>

      {/* Main Content Area */}
    <Box
        component="main"
        sx={{
        flexGrow: 1,
        p: 3,
        background: 'linear-gradient(180deg, #F0F2F5, #FFFFFF)',
        minHeight: '100vh',
        }}
    >
        {/* Top Bar */}
        <AppBar
        position="fixed"
        sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
        }}
        >
        <Toolbar>
            <Typography variant="h5" fontWeight="bold" sx={{ color: '#333' }}>
            Legal Vault System
            </Typography>
        </Toolbar>
        </AppBar>

        <Toolbar /> {/* Space to push content below AppBar */}
        {children}
    </Box>
    </Box>
);
};

export default Layout;
