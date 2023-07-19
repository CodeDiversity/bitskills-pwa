import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BasicLink from '../atoms/BasicLink';
import './Navbar.scss';

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar className='appBar'>
        <BasicLink variant='h6' to='/'>
          Bitskills
        </BasicLink>
        <BasicLink variant='h6' to='/'>
          Home
        </BasicLink>
        <BasicLink variant='h6' to='/about'>
          About
        </BasicLink>
        <BasicLink variant='h6' to='/contact'>
          Contact
        </BasicLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
