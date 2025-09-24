//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { db } from './config/db.js';
import servicesRoutes from './routes/servicesRoutes.js';


// Variables de entorno
dotenv.config();


// Configure the Express app
const app = express();

// Conectar a la base de datos
db();

// Definir rutas
app.use('/api/services', servicesRoutes);


// Define port and start the server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`El Servidor está corriendo en el puerto ${PORT}`);
});

console.log(process.env.MONGO_URI);
