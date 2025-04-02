require('dotenv').config();
const express = require('express');
const cors = require('cors');
const tarefasRoutes = require('./routes/tarefas');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/tarefas', tarefasRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});