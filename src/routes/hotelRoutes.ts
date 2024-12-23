import { Router } from "express";
import { authenticateToken } from "../middleware";
import {
  getHoteis,
  getHotel,
  getHotelQuartos,
  postAgendar,
  postHotel,
  putConfirmarAgendamento,
  putHotel,
  putVincularTagAgendamento,
} from "../controllers/hotelController";

// Inicializando rotas de usuário
const hotelRoutes = Router();

// #region  ROTAS

// Rota para get de todos os hoteis
hotelRoutes.get("/lista", authenticateToken, getHoteis);

// Rota para get de todos os quartos do hotel
hotelRoutes.get("/quartos/:id", authenticateToken, getHotelQuartos);

// Rota para get de hotel por id
hotelRoutes.get("/:id", authenticateToken, getHotel);

// Rota para post de hotel
hotelRoutes.post("/", authenticateToken, postHotel);

// Rota para put de agendamento
hotelRoutes.post("/agendar", authenticateToken, postAgendar);

// Rota para put de hotel
hotelRoutes.put("/:id", authenticateToken, putHotel);

// Rota para put de vincular tag de hotel
hotelRoutes.put(
  "/vincularTag/:id",
  authenticateToken,
  putVincularTagAgendamento
);

// Rota para put de confirmar agendamento de hotel
hotelRoutes.put(
  "/confirmarAgendamento/:id",
  authenticateToken,
  putConfirmarAgendamento
);

// #endregion

export default hotelRoutes;
