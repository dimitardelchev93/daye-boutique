import React from 'react';

import { Button, ButtonProps } from '@mui/material';
import styled from 'styled-components';

const StyledButtonWrapper = styled.div<BaseButtonProps>`
  a,
  button {
    background-color: ${({ theme, isSecondary }) =>
      isSecondary ? theme.colors.primary : theme.colors.secondary} !important;
    color: ${({ theme }) => theme.colors.text} !important;
  }
`;

type BaseButtonProps = ButtonProps & {
  isSecondary?: boolean;
  children: React.ReactNode;
};

const BaseButton: React.FC<BaseButtonProps> = ({ isSecondary, children, ...props }) => {
  return (
    <StyledButtonWrapper isSecondary={isSecondary}>
      <Button {...props}>{children}</Button>
    </StyledButtonWrapper>
  );
};

export default BaseButton;
