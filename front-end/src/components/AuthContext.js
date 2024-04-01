import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    userType: '',
    full_name: '',
  });

  useEffect(() => {
    // Initialize authentication state from local/session storage
    const storedAuth = sessionStorage.getItem('authData');
    if (storedAuth) {
      setAuthState(JSON.parse(storedAuth));
    }
  }, []);

  const signIn = (userType, full_name) => {
    const newAuthState = {
      isAuthenticated: true,
      userType: userType,
      full_name: full_name,
    };
    setAuthState(newAuthState);
    // Store authentication state in local/session storage
    sessionStorage.setItem('authData', JSON.stringify(newAuthState));
  };

  const signOut = () => {
    setAuthState({
      isAuthenticated: false,
      userType: '',
      full_name: '',
    });
    // Clear stored authentication state
    sessionStorage.removeItem('authData');
  };

  return (
    <AuthContext.Provider value={{ ...authState, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
