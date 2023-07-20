import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Dashboard/Dashboard';
import Layout from './Layout';
import Login from './pages/Login/Login';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </Layout>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
