import { Router } from 'express';
import authService from './service';

const router = Router();

router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await authService.registerUser(username, password);

    res.status(result.status).json({ message: result.message });
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await authService.loginUser(username, password);

    res.status(result.status).json(result.data);
  } catch (error) {
    next(error);
  }
});

export default router;
