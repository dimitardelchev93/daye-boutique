export interface BaseApiResponse {
  status: number;
  message?: string;
  data?: any;
}

export interface BaseApiError {
  status: number;
  message: string;
}
