import { Router } from "express";
import { getListaUsuario, getUsuario, login, postUsuario, putUsuario } from "../controllers/userController";

// Inicializando rotas de usuário
const userRoutes = Router();

// #region  ROTAS

// Rota para get de todos os usuários
userRoutes.get('/lista', getListaUsuario);

// Rota para get de usuário por id
userRoutes.get('/:id', getUsuario);

// Rota para post de usuário
userRoutes.post('/', postUsuario);

// Rota para put de usuário
userRoutes.put('/:id', putUsuario);

// Realiza login
userRoutes.post('/login', login);

// #endregion

export default userRoutes;