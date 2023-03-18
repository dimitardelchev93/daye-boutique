import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserRouter as Router } from 'react-router-dom';

import styled, { ThemeProvider } from 'styled-components';

import { AuthProvider } from 'core/auth/contexts/AuthContext';
import Layout from 'core/layout/components/Layout';
import AppRoutes from 'core/util/components/AppRoutes';

import { theme } from './theme';

const StyledScrollbar = styled(PerfectScrollbar)`
  height: 100vh;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <StyledScrollbar>
            <Layout>
              <AppRoutes />
            </Layout>
          </StyledScrollbar>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
