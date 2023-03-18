import axios from 'axios';

import { handleApiError, handleApiSuccess } from 'core/api/functions';
import { api } from 'core/api/service';
import { BaseApiResponse } from 'core/api/types';

import { Product, ProductBase } from './types';

type ProductsApiResponse = Array<Record<string, unknown>>;

export async function productsApi(): Promise<BaseApiResponse> {
  try {
    if (!process.env.REACT_APP_PRODUCTS_API_URL) {
      console.error('Please add products api url to config');
    }

    const response = await axios.get<ProductsApiResponse>(
      process.env.REACT_APP_PRODUCTS_API_URL || '',
    );

    return {
      data: response.data,
      status: 200,
    };
  } catch (e) {
    return handleApiError(e);
  }
}

interface OrderApiResponse extends BaseApiResponse {
  data?: Product;
}

export async function orderApi(token: string, product: ProductBase): Promise<OrderApiResponse> {
  try {
    const response = await api.post<OrderApiResponse>('/product/add', product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return handleApiSuccess(response);
  } catch (e) {
    return handleApiError(e);
  }
}

export async function removeOrderApi(token: string, productId: number): Promise<OrderApiResponse> {
  try {
    const response = await api.post<OrderApiResponse>(
      '/product/remove',
      { productId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return handleApiSuccess(response);
  } catch (e) {
    return handleApiError(e);
  }
}

interface OrderApiListResponse extends BaseApiResponse {
  data?: Product[];
}

export async function getOrderApi(token: string, userId?: number): Promise<OrderApiListResponse> {
  try {
    const response = await api.get<OrderApiListResponse>(`/product/get?userId=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return handleApiSuccess(response);
  } catch (e) {
    return handleApiError(e);
  }
}
