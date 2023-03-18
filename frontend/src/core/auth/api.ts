import { handleApiError, handleApiSuccess } from 'core/api/functions';
import { api } from 'core/api/service';
import { BaseApiResponse } from 'core/api/types';

import { User } from './types';

interface LoginApiResponse extends BaseApiResponse {
  token?: string;
  user?: User;
}

export async function loginApi(username: string, password: string): Promise<LoginApiResponse> {
  try {
    const response = await api.post<LoginApiResponse>('/auth/login', {
      username,
      password,
    });

    return handleApiSuccess(response);
  } catch (e) {
    return handleApiError(e);
  }
}

export async function registerApi(username: string, password: string): Promise<BaseApiResponse> {
  try {
    const response = await api.post<BaseApiResponse>('/auth/register', {
      username,
      password,
    });

    return handleApiSuccess(response);
  } catch (e) {
    return handleApiError(e);
  }
}
