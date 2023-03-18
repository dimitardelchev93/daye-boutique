import { Router } from 'express';
import { AuthenticatedRequest } from '../../core/auth/types';
import { authMiddleware } from '../../core/auth/middlewares';
import productService from './service';

const router = Router();

router.post(
  '/add',
  authMiddleware,
  async (req: AuthenticatedRequest, res, next) => {
    try {
      const { price, currency, image, tampons } = req.body;
      const userId = req.user.id;

      const result = await productService.addProduct(
        userId,
        price,
        currency,
        image,
        tampons
      );

      res
        .status(result.status)
        .json({ message: result.message, data: result?.data });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/remove',
  authMiddleware,
  async (req: AuthenticatedRequest, res, next) => {
    try {
      const { productId } = req.body;
      const userId = req.user.id;
      const result = await productService.removeProduct(userId, productId);

      res.status(result.status).json({ message: result.message, status: 200 });
    } catch (error) {
      next(error);
    }
  }
);

router.get('/get', authMiddleware, async (req, res, next) => {
  try {
    const userId = Number(req.query.userId);
    const result = await productService.getProducts(userId);

    res
      .status(result.status)
      .json({ message: result.message, data: result.data, status: 200 });
  } catch (error) {
    next(error);
  }
});

export default router;
