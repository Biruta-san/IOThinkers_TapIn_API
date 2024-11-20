import express, { Express } from "express";
import typeRoutes from "./routes/typeRoutes";
import userRoutes from "./routes/userRoutes";
import localizationRoutes from "./routes/localizationRoutes";
import dotenv from "dotenv";
import hotelRoutes from "./routes/hotelRoutes";

// Inicializando express
const app: Express = express();

// Configurando ambiente
dotenv.config();

// Redirecionamento da raiz para /api-docs
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

app.use(express.json());

// #region ROTAS
app.use("/usuario", userRoutes);
app.use("/tipoIntegracao", typeRoutes);
app.use("/localizacao", localizationRoutes);
app.use("/hotel", hotelRoutes);

// #endregion

export default app;
