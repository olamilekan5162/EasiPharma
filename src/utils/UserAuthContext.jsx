import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [level, setLevel] = useState(null)

  return (
    <UserContext.Provider value={{ user, level, setLevel, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
