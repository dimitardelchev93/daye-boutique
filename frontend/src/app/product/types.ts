import { User } from 'core/auth/types';

export interface ProductBase {
  price: number;
  currency: string;
  image: string;
  tampons: ProductItemBase[];
  ordered?: boolean;
}

export interface Product extends ProductBase {
  id: number;
  userId: number;
  user?: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductItemBase {
  size: string;
  coating: string;
  amount: number;
}

export interface ProductItem extends ProductItemBase {
  id: number;
  productId: number;
  product: Product;
  createdAt: string;
  updatedAt: string;
}

export interface RawProductItem {
  size?: string;
  coating?: string;
  amount?: number;
}

export interface RawProductData {
  price?: number;
  currency?: string;
  productImage?: string;
  tapons?: RawProductItem[] | string;
  tampons?: RawProductItem[] | string;
}
