import { useEffect, useState } from 'react';

import { getProductOffers } from '../service';
import { ProductBase } from '../types';

export const useProductOffers = () => {
  const [products, setProducts] = useState<ProductBase[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getProductOffers();

      if (fetchedProducts) {
        setProducts(fetchedProducts);
      } else {
        console.error('Failed to fetch product offers');
      }
    };

    fetchData();
  }, []);

  return products;
};
