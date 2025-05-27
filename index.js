const express = require('express');
const conectarDB = require('./config/db');
require('dotenv').config;

//Conectar a la base de datos
conectarDB();

const app = express();

//Middleware para leer JSON 
app.use(express.json());

//Importar rutas
app.use('/api', require('./routes/usuarioRoutes'));

//Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en htttp://localhost:${PORT}`);
});


