import { useEffect, useState } from 'react';

import { useAuth } from 'core/auth/contexts/AuthContext';

import { getOrderedOffers } from '../service';

import { Product } from '../types';

export const useOrderedOffers = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { token, user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        const fetchedProducts = await getOrderedOffers(token, user?.id);

        if (fetchedProducts) {
          setProducts(fetchedProducts);
        } else {
          console.error('Failed to fetch ordered product offers');
        }
      } else {
        console.error('Login to fetch ordered product offers');
      }
    };

    fetchData();
  }, []);

  return products;
};
