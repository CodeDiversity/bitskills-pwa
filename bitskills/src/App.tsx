import React from 'react';
import './App.css';
import Navbar from './organisms/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Layout from './Layout';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
