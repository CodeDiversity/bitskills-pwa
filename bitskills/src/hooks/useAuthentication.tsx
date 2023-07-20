import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useAuthentication = () => {
  const { setToken, setIsAuthenticated, token, isAuthenticated } =
    useContext(AuthContext);
  const login = () => {
    const token = '1234';
    localStorage.setItem('token', token);
    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, token, login, logout };
};

export { useAuthentication };
