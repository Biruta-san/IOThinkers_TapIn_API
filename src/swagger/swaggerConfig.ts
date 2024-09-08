import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'IOThinkers TapIn',
      version: '1.0.0',
      description: 'Documentação de API do IOThinkers TapIn',
    },
    tags: [
      { name: 'TipoIntegracao', description: 'Endpoints relacionados a tipos de integração' },
      { name: 'Usuário', description: 'Endpoints relacionados a usuários' },
    ],
  },
  apis: ['./src/controllers/*.ts']
};

const swaggerSpec = swaggerJsdoc(options);

export function swaggerDocs(app: Express, port: number) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
}
