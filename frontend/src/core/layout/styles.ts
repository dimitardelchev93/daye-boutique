import { Link } from 'react-router-dom';

import { Divider } from '@mui/material';
import styled from 'styled-components';

export const AppHeader = styled.header`
  background-color: ${(props) => props.theme.colors.secondaryBackground};
  color: ${(props) => props.theme.colors.text};
`;

export const Navigation = styled.nav<{ showOnMobile: boolean }>`
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    ${({ showOnMobile }) => (showOnMobile ? 'block' : 'display: block;')}
    display: ${({ showOnMobile }) => (showOnMobile ? 'block' : 'none')};
    position: absolute;
    top: 90px;
    right: 0;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    padding: ${({ theme }) => theme.gaps.medium};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const HeaderContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.gaps.medium};
  max-width: ${(props) => props.theme.breakpoints.large};
  margin: 0 auto;
`;

export const AppTitle = styled.div`
  margin: 0;

  a {
    display: block;
    position: relative;
    top: 5px;
  }
`;

export const AppLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.gaps.medium};
  margin: 0;
  padding: 0;
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
  }
`;

export const AppLinkItem = styled.li<{ isSeparator?: boolean; isSelected?: boolean }>`
  font-size: ${(props) => props.theme.textSizes.medium};
  a {
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.accent : theme.colors.text} !important;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    ${(props) => (props.isSeparator ? 'display: none;' : '')}
    &:not(:last-child) {
      padding-bottom: ${(props) => props.theme.gaps.medium};
      border-bottom: 1px solid ${(props) => props.theme.colors.text};
    }
  }
`;

export const Username = styled.span`
  font-weight: bold;
`;

export const NavigationLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

export const Separator = styled(Divider)`
  background-color: ${(props) => props.theme.colors.text};
  height: ${(props) => props.theme.textSizes.medium};
  margin: 0 ${(props) => props.theme.gaps.small};
`;

export const AppMainContent = styled.main`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  width: 100%;
`;

export const InnerMainContent = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.gaps.medium};
  max-width: ${(props) => props.theme.breakpoints.large};
  margin: 0 auto;
`;

export const LayoutContainer = styled.div``;
