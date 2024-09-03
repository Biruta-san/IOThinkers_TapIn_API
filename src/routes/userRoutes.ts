import { Router } from 'express';
import { getUsers, addUser } from '../controllers/userController';

// Inicializando rotas de usuário
const userRoutes = Router();

// #region ROTAS

// Rota get para todos os usuários
userRoutes.get('/', getUsers);

// Rota post para adicionar um usuário
userRoutes.post('/', addUser);

// #endregion

export default userRoutes;