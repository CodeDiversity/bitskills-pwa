import { useContext, useEffect } from 'react';
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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      setIsAuthenticated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isAuthenticated, token, login, logout };
};

export { useAuthentication };
