import React, { createContext, useContext, useState } from 'react';

import { User } from '../types';

interface AuthContextProps {
  children?: React.ReactNode;
}

interface AuthContextData {
  token: string | null;
  user: User | null;
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({
  token: null,
  user: null,
  setToken: () => null,
  setUser: () => null,
  logout: () => null,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => {
    const storageToken = localStorage.getItem('token');

    if (storageToken) {
      return storageToken;
    }

    return null;
  });
  const [user, setUser] = useState<User | null>(() => {
    const storageUserData = localStorage.getItem('userData');

    if (storageUserData) {
      return JSON.parse(storageUserData);
    }

    return null;
  });

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
  };

  return (
    <AuthContext.Provider value={{ token, user, setToken, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
