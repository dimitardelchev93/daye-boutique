import { loginApi, registerApi } from './api';
import { User } from './types';

export async function login(
  username: string,
  password: string,
  setToken: (token: string | null) => void,
  setUser: (user: User | null) => void,
): Promise<User | null> {
  const response = await loginApi(username, password);

  if (response?.status !== 200) {
    return null;
  }

  const token = response.token || '';
  const userData = response.user;

  if (!token || !userData) {
    console.error('Login error: Incorect response', token, userData);
    return null;
  }

  localStorage.setItem('token', token);
  localStorage.setItem('userData', JSON.stringify(userData));
  setToken(token);
  setUser(userData);

  return userData;
}

export async function register(username: string, password: string): Promise<boolean> {
  const response = await registerApi(username, password);

  if (response?.status !== 200) {
    return false;
  }

  return true;
}
