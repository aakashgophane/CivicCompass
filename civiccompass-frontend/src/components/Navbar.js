import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // 3-line menu icon
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          CivicCompass
        </Typography>
        
        {/* Menu Button (3-line icon) */}
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/profile">Profile</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/government-info">Government Information</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/tracker">Accountability Tracker</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/schemes">Scheme Recommender</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/chatbot">Chatbot</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/about">About</MenuItem>
          {/* New Menu Item for Government Information */}
          
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;