import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import styled from 'styled-components';

import { ProductItemBase } from 'app/product/types';

import useTamponColors from '../hooks/useTamponColors';

import TamponInfo from './TamponInfo';

const StyledTamponList = styled.div`
  height: 80px;
  width: 100%;
  overflow-y: auto;
  padding-right: ${({ theme }) => theme.gaps.xSmall};
`;

interface TamponListProps {
  tampons: ProductItemBase[];
}

const TamponList: React.FC<TamponListProps> = ({ tampons }) => {
  const colors = useTamponColors(tampons);

  return (
    <StyledTamponList>
      <PerfectScrollbar>
        {tampons.map((tampon, index) => (
          <TamponInfo key={index} tampon={tampon} color={colors[index]} />
        ))}
      </PerfectScrollbar>
    </StyledTamponList>
  );
};

export default TamponList;
