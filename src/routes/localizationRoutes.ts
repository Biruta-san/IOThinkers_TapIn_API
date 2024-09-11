import { Router } from "express";
import { getListaTipoIntegracao, getTipoIntegracao, postTipoIntegracao, putTipoIntegracao } from "../controllers/typeController";
import { authenticateToken } from "../middleware";

// Inicializando rotas de usuário
const localizationRoutes = Router();

// #region ROTAS DE PAIS
// Rota para get de todos os paises
localizationRoutes.get('/pais/lista', authenticateToken, getListaTipoIntegracao);

// Rota para get de pais por id
localizationRoutes.get('pais/:id', authenticateToken, getTipoIntegracao);

// Rota para post de pais
localizationRoutes.post('pais/', authenticateToken, postTipoIntegracao);

// Rota para put de pais
localizationRoutes.put('pais/:id', authenticateToken, putTipoIntegracao);

// #endregion

// #region ROTAS DE ESTADO
// Rota para get de todos os estados
localizationRoutes.get('/estado/lista', authenticateToken, getListaTipoIntegracao);

// Rota para get de estado por id
localizationRoutes.get('estado/:id', authenticateToken, getTipoIntegracao);

// Rota para post de estado
localizationRoutes.post('estado/', authenticateToken, postTipoIntegracao);

// Rota para put de estado
localizationRoutes.put('estado/:id', authenticateToken, putTipoIntegracao);

// #endregion

// #region ROTAS DE CIDADE
// Rota para get de todos as cidades
localizationRoutes.get('/cidade/lista', authenticateToken, getListaTipoIntegracao);

// Rota para get de cidade por id
localizationRoutes.get('cidade/:id', authenticateToken, getTipoIntegracao);

// Rota para post de cidade
localizationRoutes.post('cidade/', authenticateToken, postTipoIntegracao);

// Rota para put de ciadde
localizationRoutes.put('cidade/:id', authenticateToken, putTipoIntegracao);

// #endregion

export default localizationRoutes;