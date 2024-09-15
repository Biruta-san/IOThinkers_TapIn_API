import { Router } from "express";
import { authenticateToken } from "../middleware";
import { getHoteis, getHotel, postHotel, putHotel } from "../controllers/hotelController";

// Inicializando rotas de usuário
const hotelRoutes = Router();

// #region  ROTAS

// Rota para get de todos os tipos de integração
hotelRoutes.get("/lista", authenticateToken, getHoteis);

// Rota para get de tipo de integração por id
hotelRoutes.get("/:id", authenticateToken, getHotel);

// Rota para post de tipo de integração
hotelRoutes.post("/", authenticateToken, postHotel);

// Rota para put de tipo de integração
hotelRoutes.put("/:id", authenticateToken, putHotel);

// #endregion

export default hotelRoutes;
