import React from 'react';

import { Typography } from '@mui/material';
import styled from 'styled-components';

import { ProductItemBase } from '../../product/types';

interface TamponInfoProps {
  tampon: ProductItemBase;
  color?: string;
}

const Bullet = styled.span<{ color: string }>`
  display: inline-block;
  margin-right: ${({ theme }) => theme.gaps.xSmall};
  color: ${({ color }) => color};
`;

const TamponInfo: React.FC<TamponInfoProps> = ({ tampon, color }) => {
  const { size, coating, amount } = tampon;

  return (
    <Typography variant="body2">
      <Bullet color={color || 'black'}>{'\u2022'}</Bullet>
      {amount} {size} tampons with {coating === 'none' ? 'no' : coating} coating
    </Typography>
  );
};

export default TamponInfo;
