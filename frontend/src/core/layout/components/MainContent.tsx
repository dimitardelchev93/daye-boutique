import React from 'react';

import { AppMainContent, InnerMainContent } from '../styles';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <AppMainContent>
      <InnerMainContent>{children}</InnerMainContent>
    </AppMainContent>
  );
};

export default MainContent;
