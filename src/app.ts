import express, { Express } from 'express';
import typeRoutes from './routes/typeRoutes';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

// Inicializando express
const app: Express = express();
dotenv.config();

app.use(express.json());

// #region ROTAS
app.use('/usuario', userRoutes);
app.use('/tipoIntegracao', typeRoutes);

// #endregion

export default app;