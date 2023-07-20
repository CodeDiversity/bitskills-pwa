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
  const { isAuthenticated } = useAuthentication();

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
