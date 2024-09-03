import { dbUser, getUser, postUser } from '../models/userModels';
import prisma from '../prismaClient';

export async function getAllUsers() {
  const users : dbUser[] = await prisma.user.findMany();
  const mappedUsers : getUser[] = users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt
    };
  });
  return mappedUsers;
}

export async function createUser(data: postUser) {
  const user : dbUser = await prisma.user.create({ data });
  const mappedUser : getUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt
  };
  return mappedUser;
}