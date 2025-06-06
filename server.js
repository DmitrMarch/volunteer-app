const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const itemsRoutes = require('./routes/itemsRoutes');

app.use(express.json()); // для обработки JSON-тел запросов

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Volunteer App API',
      version: '1.0.0',
      description: 'Документация для API приложения волонтёров',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  apis: ['./routes/*.js'], // путь до файлов с аннотациями
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', itemsRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
