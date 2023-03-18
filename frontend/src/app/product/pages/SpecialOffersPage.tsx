import React, { useCallback, useEffect, useState } from 'react';

import { Typography } from '@mui/material';

import styled from 'styled-components';

import BaseButton from 'core/layout/components/BaseButton';

import ProductList from '../components/ProductList';
import { checkIfProductExistsInProducts, getSortedOrderedProducts } from '../functions';
import { useOrderedOffers } from '../hooks/useOrderedOffers';
import { useProductOffers } from '../hooks/useProductOffers';
import { ProductBase } from '../types';

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

const NewsletterCTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.gaps.large} 0;
`;

const SpecialOffersPage: React.FC = () => {
  const products = useProductOffers();
  const orderedProducts = useOrderedOffers();
  const [productsWithOrderFlag, setProductsWithOrderFlag] = useState<ProductBase[]>([]);

  useEffect(() => {
    const sortedOrderedProducts = getSortedOrderedProducts(orderedProducts);

    const updatedProductsWithOrderFlag = products.map((product) => {
      const ordered = checkIfProductExistsInProducts(product, sortedOrderedProducts);

      return {
        ...product,
        ordered,
      };
    });

    setProductsWithOrderFlag(updatedProductsWithOrderFlag);
  }, [products, orderedProducts]);

  const setProductOrderStatus = useCallback((targetProduct: ProductBase) => {
    setProductsWithOrderFlag((prevProductsWithOrderFlag) =>
      prevProductsWithOrderFlag.map((product) =>
        checkIfProductExistsInProducts(product, [targetProduct])
          ? { ...product, ordered: true }
          : product,
      ),
    );
  }, []);

  return (
    <Wrapper>
      <BannerSection>
        <Typography variant="h3" component="h3">
          Special Offers
        </Typography>
      </BannerSection>
      <ProductList
        products={productsWithOrderFlag}
        setProductOrderStatus={setProductOrderStatus}
      ></ProductList>
      <OffersDescription>
        <Typography variant="h4" component="h2" sx={{ marginTop: '80px' }}>
          Exclusive Deals and Discounts
        </Typography>
        <Typography sx={{ maxWidth: '800px', margin: '10px auto' }}>
          Explore our range of exclusive offers and discounts, carefully curated to provide the best
          value for our customers. Don't miss out on these limited-time deals!
        </Typography>
      </OffersDescription>
      <NewsletterCTA>
        <Typography sx={{ marginRight: '10px' }}>Don't miss our special offers:</Typography>
        <BaseButton variant="contained" href="/register" isSecondary>
          Sign up for our newsletter
        </BaseButton>
      </NewsletterCTA>
    </Wrapper>
  );
};

export default SpecialOffersPage;
