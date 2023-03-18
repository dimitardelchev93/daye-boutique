import jwt from 'jsonwebtoken';
import config from '../config';
import bcrypt from 'bcrypt';

export function generateToken(id: number, username: string): string {
  return jwt.sign({ id, username }, config.jwtSecret);
}

export function comparePasswords(
  inputPassword: string,
  storedPassword: string
): boolean {
  return bcrypt.compareSync(inputPassword, storedPassword);
}
