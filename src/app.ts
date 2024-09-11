import express, { Express } from "express";
import typeRoutes from "./routes/typeRoutes";
import userRoutes from "./routes/userRoutes";
import localizationRoutes from "./routes/localizationRoutes";
import dotenv from "dotenv";

// Inicializando express
const app: Express = express();

// Configurando ambiente
dotenv.config();

app.use(express.json());

// #region ROTAS
app.use("/usuario", userRoutes);
app.use("/tipoIntegracao", typeRoutes);
app.use("/localizacao", localizationRoutes);

// #endregion

export default app;
