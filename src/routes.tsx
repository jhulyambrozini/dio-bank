import { Routes, Route } from 'react-router-dom';
import { AccountInfo } from './pages/AccountInfoPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

const MainRoutes = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/account/:uid" element={<HomePage />} />
      <Route
        path="/account/:uid/info"
        element={isLoggedIn ? <AccountInfo /> : <LoginPage />}
      />
    </Routes>
  );
};

export default MainRoutes;
