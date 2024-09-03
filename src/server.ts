import app from "./app";
import { swaggerDocs } from "./swagger/swaggerConfig";

// Porta da aplicação
const PORT: number = parseInt(process.env.PORT || '3000', 10) || 3000;

// Inicializando o servidor
app.listen(PORT, () => {
  // Documentação do swagger
  swaggerDocs(app, PORT);
});