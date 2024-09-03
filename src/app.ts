import express, { Express } from 'express';
import userRoutes from './routes/userRoutes';

// Inicializando express
const app: Express = express();
app.use(express.json());

// #region ROTAS

app.use('/api/users', userRoutes);

// #endregion

export default app;