import React, { useCallback } from 'react';

import { useAuth } from 'core/auth/contexts/AuthContext';

import { useAlert } from 'core/util/hooks/useAlert';

import { orderSpecialOffer } from '../service';
import { ProductBase } from '../types';

import ProductCardBase from './ProductCardBase';

interface ProductCardProps {
  product: ProductBase;
  setProductOrderStatus: (targetProduct: ProductBase) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, setProductOrderStatus }) => {
  const { token } = useAuth();
  const alert = useAlert();
  const orderHandler = useCallback(async () => {
    if (token) {
      const productData = await orderSpecialOffer(token, product);

      if (productData) {
        setProductOrderStatus(product);
        alert({
          severity: 'success',
          message: 'Ordering special offer was successfull!',
        });
      } else {
        alert({
          severity: 'error',
          message: 'Ordering special offer failed!',
        });
      }
    } else {
      alert({
        severity: 'warning',
        message: 'You have to be logged in to order the special offer!',
        duration: 2000,
      });
    }
  }, []);

  return (
    <ProductCardBase
      product={product}
      orderHandler={orderHandler}
      buttonText={'Order Now'}
      disabledText={'Ordered'}
    />
  );
};

export default ProductCard;
