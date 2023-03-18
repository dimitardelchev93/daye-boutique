import { getOrderApi, orderApi, productsApi, removeOrderApi } from './api';
import { normalizeProductsData } from './functions';
import { Product, ProductBase } from './types';

export async function getProductOffers(): Promise<ProductBase[] | null> {
  const response = await productsApi();

  if (response?.status !== 200 || !response?.data) {
    return null;
  }

  const products = response.data;
  const normalizedProductsData = normalizeProductsData(products);

  return normalizedProductsData;
}

export async function orderSpecialOffer(
  token: string,
  product: ProductBase,
): Promise<Product | undefined> {
  const response = await orderApi(token, product);

  return response?.data;
}

export async function removeSpecialOffer(token: string, productId: number): Promise<boolean> {
  const response = await removeOrderApi(token, productId);

  return response?.status === 200;
}

export async function getOrderedOffers(token: string, userId?: number): Promise<Product[]> {
  const response = await getOrderApi(token, userId);

  return response?.data || [];
}
