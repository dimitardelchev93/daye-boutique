import { Request, Response, NextFunction } from 'express';

type CustomError = {
  status?: number;
  message?: string;
};

export const errorHandlerMiddleware = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Middleware caught an error: ', error);

  const status = error.status || 500;
  const message = error.message || 'Internal Server Error';

  res.status(status).json({ message });
};
