import React from 'react';

import { Typography, CardContent, Grid, Card } from '@mui/material';
import styled from 'styled-components';

import TamponList from 'app/tampon/components/TamponList';
import BaseButton from 'core/layout/components/BaseButton';

import { ProductBase } from '../types';

const StyledCard = styled(Card)`
  display: flex;
  margin-top: ${({ theme }) => theme.gaps.medium};
  margin-bottom: ${({ theme }) => theme.gaps.medium};
  border-radius: ${({ theme }) => theme.gaps.small};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
`;

const StyledCardContent = styled(CardContent)`
  flex: 1;
  padding-bottom: 0 !important;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
`;

const StyledCardMedia = styled.div`
  padding-left: 10px;
  flex: 1;
  max-width: 40%;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
`;

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.gaps.medium};
  padding-top: 0;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
`;

interface ProductCardBaseProps {
  product: ProductBase;
  buttonText: string;
  disabledText?: string;
  isDecline?: boolean;
  orderHandler: () => Promise<void>;
}

const ProductCardBase: React.FC<ProductCardBaseProps> = ({
  product,
  orderHandler,
  buttonText,
  isDecline,
  disabledText,
}) => {
  const { price, currency, image, tampons } = product;

  return (
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <StyledCard>
        <StyledCardMedia>
          <StyledImage src={image} alt="Product" />
        </StyledCardMedia>
        <ContentContainer>
          <StyledCardContent>
            <Typography variant="h6" component="div" gutterBottom>
              {price} {currency}
            </Typography>
            <TamponList tampons={tampons} />
          </StyledCardContent>
          <ButtonContainer>
            <BaseButton
              onClick={orderHandler}
              variant="contained"
              disabled={isDecline ? !product?.ordered : !!product?.ordered}
            >
              {product?.ordered ? disabledText : buttonText}
            </BaseButton>
          </ButtonContainer>
        </ContentContainer>
      </StyledCard>
    </Grid>
  );
};

export default ProductCardBase;
