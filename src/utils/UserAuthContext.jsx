import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [level, setLevel] = useState(() => {
    const storedLevel = localStorage.getItem('level');
    return storedLevel ? JSON.parse(storedLevel) : null;
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('level', JSON.stringify(level));
  }, [level]);

  return (
    <UserContext.Provider value={{ user, level, setLevel, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };