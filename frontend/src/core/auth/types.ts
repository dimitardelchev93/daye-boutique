import { ProductBase } from 'app/product/types';

export interface User {
  id: number;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  products?: ProductBase[];
}

export interface AuthContextData {
  isLoggedIn: boolean;
  username: string;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUsername: (username: string) => void;
}
