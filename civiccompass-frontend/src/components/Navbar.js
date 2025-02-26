// src/components/Navbar.js
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CivicCompass
        </Typography>
        {/* Dropdown Menu Button */}
        <Button color="inherit" onClick={handleMenuOpen}>
          Menu
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{ "aria-labelledby": "menu-button" }}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/">
            Gov Info
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/userinfo/1">
            User Info
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/accountability">
            Accountability
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/chatbot">
            Chatbot
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/about">
            About
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
