import React from 'react';

import styled from 'styled-components';

const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MobileMenuLine = styled.div`
  border-radius: 3px;
  height: 5px;
  width: 30px;
  background-color: ${({ theme }) => theme.colors.text};
`;

const MobileMenu: React.FC = () => {
  return (
    <MobileMenuWrapper>
      <MobileMenuLine />
      <MobileMenuLine />
      <MobileMenuLine />
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
