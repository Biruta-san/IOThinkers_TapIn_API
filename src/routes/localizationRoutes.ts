import { Router } from "express";
import { authenticateToken } from "../middleware";
import {
  getCidade,
  getCidades,
  getEstado,
  getEstados,
  getPais,
  getPaises,
  postCidade,
  postEstado,
  postPais,
  putCidade,
  putEstado,
  putPais,
} from "../controllers/localizationController";

// Inicializando rotas de usuário
const localizationRoutes = Router();

// #region ROTAS DE PAIS
// Rota para get de todos os paises
localizationRoutes.get("/pais/lista", authenticateToken, getPaises);

// Rota para get de pais por id
localizationRoutes.get("/pais/:id", authenticateToken, getPais);

// Rota para post de pais
localizationRoutes.post("/pais", authenticateToken, postPais);

// Rota para put de pais
localizationRoutes.put("/pais/:id", authenticateToken, putPais);

// #endregion

// #region ROTAS DE ESTADO
// Rota para get de todos os estados
localizationRoutes.get("/estado/lista", authenticateToken, getEstados);

// Rota para get de estado por id
localizationRoutes.get("/estado/:id", authenticateToken, getEstado);

// Rota para post de estado
localizationRoutes.post("/estado", authenticateToken, postEstado);

// Rota para put de estado
localizationRoutes.put("/estado/:id", authenticateToken, putEstado);

// #endregion

// #region ROTAS DE CIDADE
// Rota para get de todos as cidades
localizationRoutes.get("/cidade/lista", authenticateToken, getCidades);

// Rota para get de cidade por id
localizationRoutes.get("/cidade/:id", authenticateToken, getCidade);

// Rota para post de cidade
localizationRoutes.post("/cidade", authenticateToken, postCidade);

// Rota para put de ciadde
localizationRoutes.put("/cidade/:id", authenticateToken, putCidade);

// #endregion

export default localizationRoutes;
