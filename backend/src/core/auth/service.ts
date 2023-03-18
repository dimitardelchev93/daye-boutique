import { comparePasswords, generateToken } from './util';
import { findUserByUsername, createUser } from './model';

const authService = {
  async registerUser(username: string, password: string) {
    const existingUser = await findUserByUsername(username);

    if (existingUser) {
      return { status: 409, message: 'Username already taken' };
    }

    const user = await createUser(username, password);
    const token = generateToken(user.id, user.username);

    return { status: 200, message: 'Registration successful', data: { token } };
  },

  async loginUser(username: string, password: string) {
    const user = await findUserByUsername(username);

    if (!user || !comparePasswords(password, user.password)) {
      return { status: 401, message: 'Invalid username or password' };
    }

    const token = generateToken(user.id, user.username);

    return { status: 200, data: { token, user } };
  },
};

export default authService;
