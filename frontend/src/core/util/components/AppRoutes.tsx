import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const SpecialOffersPage = lazy(() => import('app/product/pages/SpecialOffersPage'));
const Login = lazy(() => import('core/auth/components/Login'));
const Register = lazy(() => import('core/auth/components/Register'));
const WelcomePage = lazy(() => import('core/layout/pages/WelcomePage'));

import { CircularProgress } from '@mui/material';

import MyOffersPage from 'app/product/pages/MyOffersPage';
import { useAuth } from 'core/auth/contexts/AuthContext';

const AppRoutes: React.FC = () => {
  const { token } = useAuth();

  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/offers" element={<SpecialOffersPage />} />
        {token && (
          <>
            <Route path="/orders" element={<MyOffersPage />} />
          </>
        )}
        {!token && <Route path="/login" element={<Login />} />}
        {!token && <Route path="/register" element={<Register />} />}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
