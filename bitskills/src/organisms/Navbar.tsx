import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BasicLink from '../atoms/BasicLink';

const Navbar = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <BasicLink variant='h6'>Bitskills</BasicLink>
          <BasicLink variant='h6'>Home</BasicLink>
          <BasicLink variant='h6'>About</BasicLink>
          <BasicLink variant='h6'>Contact</BasicLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
