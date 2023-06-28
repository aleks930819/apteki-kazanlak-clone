import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const userLogin = (authData) => {
    setAuth(authData);
    sessionStorage.setItem('user', JSON.stringify(authData));
  };

  const userLogout = () => {
    setAuth({});
    sessionStorage.removeItem('user');
  };

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setAuth(foundUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
