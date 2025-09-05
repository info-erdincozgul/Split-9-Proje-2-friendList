import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUserInfo, setAuthUserInfo] = useLocalStorage('s11d2', null);
  const isLoggedIn = authUserInfo;

  const login = (userData) => {
    setAuthUserInfo(userData);
  };
  const logout = () => {
    setAuthUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, authUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
