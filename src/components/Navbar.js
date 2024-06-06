import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Navbar title */}
        <Typography variant="h6">React Material-UI API Integration</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

