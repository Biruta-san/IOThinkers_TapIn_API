import express, { Express } from 'express';
import typeRoutes from './routes/typeRoutes';
import userRoutes from './routes/userRoutes';

// Inicializando express
const app: Express = express();
app.use(express.json());

// #region ROTAS
app.use('/usuario', userRoutes);
app.use('/tipoIntegracao', typeRoutes);

// #endregion

export default app;