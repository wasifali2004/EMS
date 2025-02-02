import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/Localstorage';

export const AuthContext = createContext();

const AuthProvides = ({ children }) => {
  const [user, setUser] = useState({ employees: [], admin: [] });

  useEffect(() => {
    setLocalStorage();
    const storedData = getLocalStorage();
    setUser(storedData?.employees || []); // ✅ Always an array
  }, []);
  

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvides;
