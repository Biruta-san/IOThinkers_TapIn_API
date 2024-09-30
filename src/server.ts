import app from "./app";
import { swaggerDocs } from "./swagger/swaggerConfig";

// Porta da aplicação
const URL: string = process.env.APP_URL || "http://localhost";
const PORT: number = parseInt(process.env.PORT || "3000", 10) || 3000;

// Inicializando o servidor
app.listen(PORT, () => {
  // Documentação do swagger
  swaggerDocs(app, URL, PORT);
});
