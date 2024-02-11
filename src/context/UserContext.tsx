import { createContext, useEffect, useState } from 'react';

import { getAllLocalStorage } from '../services/storage';

interface IUserContext {
  userName: string;
  userEmail: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const storage = getAllLocalStorage();

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage);
      setIsLoggedIn(login);
    }
  }, [storage]);

  const userEmail = 'jhuly@email.com';
  const userName = 'Jhuly';

  return (
    <UserContext.Provider
      value={{ userEmail, userName, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};
