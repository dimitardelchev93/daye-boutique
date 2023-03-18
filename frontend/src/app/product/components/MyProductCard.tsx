import React, { useCallback } from 'react';

import { useAuth } from 'core/auth/contexts/AuthContext';

import { useAlert } from 'core/util/hooks/useAlert';

import { removeSpecialOffer } from '../service';
import { Product } from '../types';

import ProductCardBase from './ProductCardBase';

interface MyProductCardProps {
  product: Product;
  setProductOrderStatus: (targetProduct: Product) => void;
}

const MyProductCard: React.FC<MyProductCardProps> = ({ product, setProductOrderStatus }) => {
  const { token } = useAuth();
  const alert = useAlert();
  const orderHandler = useCallback(async () => {
    if (token) {
      const productData = await removeSpecialOffer(token, product.id);

      if (productData) {
        setProductOrderStatus(product);
        alert({
          severity: 'success',
          message: 'Declining special offer was successfull!',
        });
      } else {
        alert({
          severity: 'error',
          message: 'Declining special offer failed!',
        });
      }
    } else {
      alert({
        severity: 'warning',
        message: 'You have to be logged in to decline the special offer!',
        duration: 2000,
      });
    }
  }, []);

  return (
    <ProductCardBase
      product={product}
      orderHandler={orderHandler}
      buttonText={'Order Declined'}
      disabledText={'Decline Order'}
      isDecline
    />
  );
};

export default MyProductCard;
