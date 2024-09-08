import { Router } from "express";
import { getListaTipoIntegracao, getTipoIntegracao, postTipoIntegracao, putTipoIntegracao } from "../controllers/typeController";
import { authenticateToken } from "../middleware";

// Inicializando rotas de usuário
const typeRoutes = Router();

// #region  ROTAS

// Rota para get de todos os tipos de integração
typeRoutes.get('/lista', authenticateToken, getListaTipoIntegracao);

// Rota para get de tipo de integração por id
typeRoutes.get('/:id', authenticateToken, getTipoIntegracao);

// Rota para post de tipo de integração
typeRoutes.post('/', authenticateToken, postTipoIntegracao);

// Rota para put de tipo de integração
typeRoutes.put('/:id', authenticateToken, putTipoIntegracao);

// #endregion

export default typeRoutes;