import React, { ReactNode, createContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  token: string;
  username: string;
  setUsername: (username: string) => void;
  setToken: (token: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const initialContext: AuthContextType = {
  isAuthenticated: false,
  token: '',
  username: '',
  setUsername: () => {},
  setToken: () => {},
  setIsAuthenticated: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialContext);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');

  const contextValue: AuthContextType = {
    isAuthenticated,
    token,
    username,
    setUsername,
    setToken,
    setIsAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
