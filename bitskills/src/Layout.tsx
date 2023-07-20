import React, { useEffect } from 'react';
import Navbar from './organisms/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import { useAuthentication } from './hooks/useAuthentication';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const navigate = useNavigate();
  const { token, isAuthenticated } = useAuthentication();
  // write a function to check if the user is authenticated
  // if the user is authenticated, return the children
  // if the user is not authenticated, redirect to the login page

  useEffect(() => {
    // Check if the user is authenticated
    if (!isAuthenticated) {
      // Redirect the user to the login page
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    // Redirect the user to the login page
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Login />
        </main>
        <footer></footer>
      </div>
    );
  }

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
