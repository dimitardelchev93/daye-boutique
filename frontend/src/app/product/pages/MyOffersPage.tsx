import React, { useCallback, useEffect, useState } from 'react';

import { Typography } from '@mui/material';

import styled from 'styled-components';

import MyProductList from '../components/MyProductList';
import { checkIfProductExistsInProducts } from '../functions';
import { useOrderedOffers } from '../hooks/useOrderedOffers';
import { Product } from '../types';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
`;

const BannerSection = styled.div`
  background-image: url('/path-to-your-banner-image.jpg');
  background-size: cover;
  background-position: center;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OffersDescription = styled.div`
  padding: ${({ theme }) => theme.gaps.large} 0;
  text-align: center;
`;

const MyOffersPage: React.FC = () => {
  const orderedOffers = useOrderedOffers();
  const [finalOrderedOffers, setFinalOrderedOffers] = useState<Product[]>([]);

  useEffect(() => {
    setFinalOrderedOffers(orderedOffers.map((offer) => ({ ...offer, ordered: true })));
  }, [orderedOffers]);

  const setProductOrderStatus = useCallback((targetProduct: Product) => {
    setFinalOrderedOffers((prevFinalOrderedOffers) =>
      prevFinalOrderedOffers.map((product) =>
        checkIfProductExistsInProducts(product, [targetProduct])
          ? { ...product, ordered: false }
          : product,
      ),
    );
  }, []);

  return (
    <Wrapper>
      <BannerSection>
        <Typography variant="h3" component="h3">
          My Offers
        </Typography>
      </BannerSection>
      <MyProductList
        products={finalOrderedOffers}
        setProductOrderStatus={setProductOrderStatus}
      ></MyProductList>
      <OffersDescription>
        <Typography variant="h4" component="h2" sx={{ marginTop: '80px' }}>
          Your Ordered Offers
        </Typography>
        <Typography sx={{ maxWidth: '800px', margin: '10px auto' }}>
          These are the special offers you have ordered. Enjoy your exclusive deals and discounts!
        </Typography>
      </OffersDescription>
    </Wrapper>
  );
};

export default MyOffersPage;
