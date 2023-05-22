import { createContext, useEffect, useState } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../helpers/storage';
import { showErrorNotification } from '../helpers/toasts';
import { useNavigate } from 'react-router-dom';
import { pages } from '../constants/pages';
import { userCredentials } from '../constants/userCredentials';

const UserContext = createContext(null);
export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const logout = async () => {
    localStorage.removeItem(process.env.jwtStorageName);
    setUser(null);
    navigate(pages.otherPages.login.path);
  };
  const load = (paramToken = null) => {
    const token = paramToken || getFromLocalStorage(process.env.jwtStorageName);
    if (token) {
      Object.keys(userCredentials)?.map((user) => {
        if (userCredentials[user].token === token) {
          setUser(userCredentials[user]);
        }
      });
    }
  };

  const getPages = () => {
    if (user && isAdmin) return pages.adminPages;
    else if (user) return pages.userPages;
    else return null;
  };
  const getUser = (email, password) => {
    let res = null;
    Object.keys(userCredentials)?.map((user) => {
      if (userCredentials[user].email === email && userCredentials[user].password === password) {
        res = userCredentials[user];
      }
    });
    return res;
  };
  const setAuth = async (email, password) => {
    let res = null;
    try {
      res = await getUser(email, password);
    } catch (err) {
      showErrorNotification(err.response?.data.data.message);
    }
    return res;
  };

  const login = async (email, password) => {
    const user = await setAuth(email, password);
    if (!user) return false;
    setUser(user);
    const token = user.token;

    setToLocalStorage(process.env.jwtStorageName, token);
    load(token);
    navigate(pages.userPages.dashboard.path);
    return true;
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        getPages
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
