import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BasicLink from '../../atoms/BasicLink';
import './Navbar.scss';
import { useAuthentication } from '../../hooks/useAuthentication';

const Navbar = () => {
  const { logout, isAuthenticated } = useAuthentication();
  return (
    <AppBar position='static'>
      <Toolbar className='appBar'>
        <BasicLink variant='h6' to='/'>
          Bitskills
        </BasicLink>
        <BasicLink variant='h6' to='/about'>
          About
        </BasicLink>
        <BasicLink variant='h6' to='/login'>
          {isAuthenticated ? <span onClick={logout}>Logout</span> : 'Login'}
        </BasicLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
