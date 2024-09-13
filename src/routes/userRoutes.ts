import { Router } from "express";
import {
  getListaUsuario,
  getUsuario,
  login,
  postUsuario,
  putUsuario,
} from "../controllers/userController";
import { authenticateToken } from "../middleware";

// Inicializando rotas de usuário
const userRoutes = Router();

// #region  ROTAS

// Rota para get de todos os usuários
userRoutes.get("/lista", authenticateToken, getListaUsuario);

// Rota para get de usuário por id
userRoutes.get("/:id", authenticateToken, getUsuario);

// Rota para post de usuário
userRoutes.post("/", authenticateToken, postUsuario);

// Rota para put de usuário
userRoutes.put("/:id", authenticateToken, putUsuario);

// Realiza login
userRoutes.post("/login", login);

// #endregion

export default userRoutes;
