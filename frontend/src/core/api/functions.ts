import { AxiosError, AxiosResponse } from 'axios';

import { BaseApiError, BaseApiResponse } from './types';

export function handleApiError(e: unknown): BaseApiError {
  if (e instanceof Error && (e as AxiosError).isAxiosError) {
    console.error('API error: ', e);

    return {
      message:
        (e as AxiosError<BaseApiError>).response?.data.message ||
        'An error occurred during the API request.',
      status: (e as AxiosError).response?.status || 500,
    };
  } else {
    console.error('Unknown error occurred after API request: ', e);

    return {
      message: 'An unknown error occurred during the API request.',
      status: 500,
    };
  }
}

export function handleApiSuccess(response: AxiosResponse<BaseApiResponse>): BaseApiResponse {
  return {
    ...response?.data,
    status: 200,
  };
}
