import User from '../../models/user';

export async function findUserByUsername(username: string) {
  return await User.findOne({ where: { username } });
}

export async function createUser(username: string, password: string) {
  return await User.create({ username, password });
}

export async function findUserById(userId: number) {
  return await User.findOne({ where: { id: userId } });
}
