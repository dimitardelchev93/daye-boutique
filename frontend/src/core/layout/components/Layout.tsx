import React from 'react';

import Header from 'core/layout/components/Header';

import { AlertProvider } from 'core/util/contexts/AlertContext';

import { LayoutContainer } from '../styles';

import MainContent from './MainContent';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <AlertProvider>
        <Header />
        <MainContent>{children}</MainContent>
      </AlertProvider>
    </LayoutContainer>
  );
};

export default Layout;
