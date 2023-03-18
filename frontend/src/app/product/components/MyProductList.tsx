import React from 'react';

import { Container, Typography, Grid } from '@mui/material';

import { Product } from '../types';

import MyProductCard from './MyProductCard';

interface MyProductListProps {
  products: Product[];
  setProductOrderStatus: (targetProduct: Product) => void;
}

const MyProductList: React.FC<MyProductListProps> = ({ products, setProductOrderStatus }) => {
  return (
    <Container sx={{ text: 4 }}>
      {products.length === 0 ? (
        <Typography variant="body1" component="p" sx={{ mt: 4, textAlign: 'center' }}>
          No products ordered.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <MyProductCard
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

export default MyProductList;
