import React from 'react';

import { Container, Typography, Grid } from '@mui/material';

import { ProductBase } from '../types';

import ProductCard from './ProductCard';

interface ProductListProps {
  products: ProductBase[];
  setProductOrderStatus: (targetProduct: ProductBase) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, setProductOrderStatus }) => {
  return (
    <Container>
      {products.length === 0 ? (
        <Typography variant="body1" component="p" sx={{ mt: 4, textAlign: 'center' }}>
          No products available.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <ProductCard
              key={JSON.stringify(product)}
              product={product}
              setProductOrderStatus={setProductOrderStatus}
            />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ProductList;
