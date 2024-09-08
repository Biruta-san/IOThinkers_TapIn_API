import { Router } from "express";
import { getListaTipoIntegracao, getTipoIntegracao, postTipoIntegracao, putTipoIntegracao } from "../controllers/typeController";

// Inicializando rotas de usuário
const typeRoutes = Router();

// #region  ROTAS

// Rota para get de todos os tipos de integração
typeRoutes.get('/lista', getListaTipoIntegracao);

// Rota para get de tipo de integração por id
typeRoutes.get('/:id', getTipoIntegracao);

// Rota para post de tipo de integração
typeRoutes.post('/', postTipoIntegracao);

// Rota para put de tipo de integração
typeRoutes.put('/:id', putTipoIntegracao);

// #endregion

export default typeRoutes;