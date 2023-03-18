import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { AppHeader, HeaderContent, AppTitle, Navigation } from '../styles';

import HeaderLinks from './HeaderLinks';
import { Logo } from './Logo';
import MobileMenu from './MobileMenu';

const MobileMenuButton = styled.button`
  display: none;
  border: none;
  background: transparent;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: block;
  }
`;

const StyledNeutralLink = styled(Link)`
  display: flex-inline;
`;

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prevState) => !prevState);
  }, []);

  return (
    <AppHeader>
      <HeaderContent>
        <AppTitle>
          <StyledNeutralLink to="/">
            <Logo />
          </StyledNeutralLink>
        </AppTitle>
        <MobileMenuButton onClick={toggleMobileMenu}>
          <MobileMenu />
        </MobileMenuButton>
        <Navigation showOnMobile={mobileMenuOpen}>
          <HeaderLinks />
        </Navigation>
      </HeaderContent>
    </AppHeader>
  );
};

export default Header;
