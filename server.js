const express = require('express');
const app = express();
const itemsRoutes = require('./routes/itemsRoutes');

app.use(express.json()); // для обработки JSON-тел запросов
app.use('/api', itemsRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
