import React from 'react';
import { useLocation } from 'react-router-dom';

import { useAuth } from 'core/auth/contexts/AuthContext';

import { AppLinks, AppLinkItem, NavigationLink } from '../styles';

import HeaderLinkSeparator from './HeaderLinkSeparator';

const HeaderLinks: React.FC = () => {
  const { user, token, logout } = useAuth();
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  return (
    <AppLinks>
      <AppLinkItem isSelected={location.pathname === '/'}>
        <NavigationLink to="/">Homepage</NavigationLink>
      </AppLinkItem>
      <HeaderLinkSeparator />
      <AppLinkItem isSelected={location.pathname === '/offers'}>
        <NavigationLink to="/offers">Special Offers</NavigationLink>
      </AppLinkItem>
      <HeaderLinkSeparator />
      {token && user ? (
        <>
          <AppLinkItem isSelected={location.pathname === '/orders'}>
            <NavigationLink to="/orders">My Orders</NavigationLink>
          </AppLinkItem>
          <HeaderLinkSeparator />
          <AppLinkItem>
            <NavigationLink onClick={handleLogout} to="/">
              Log out
            </NavigationLink>
          </AppLinkItem>
        </>
      ) : (
        <>
          <AppLinkItem isSelected={location.pathname === '/login'}>
            <NavigationLink to="/login">Log In</NavigationLink>
          </AppLinkItem>
          <HeaderLinkSeparator />
          <AppLinkItem isSelected={location.pathname === '/register'}>
            <NavigationLink to="/register">Sign Up</NavigationLink>
          </AppLinkItem>
        </>
      )}
    </AppLinks>
  );
};

export default HeaderLinks;
