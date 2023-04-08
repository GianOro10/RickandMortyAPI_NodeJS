const express = require('express');
const axios = require('axios');

const app = express();
const baseUrl = 'https://rickandmortyapi.com/api/';

// Define una ruta para la página principal
app.get('/', (req, res) => {
    res.send('Bienvenido a la búsqueda de personajes de Rick and Morty!');
});

// Define una ruta para manejar las solicitudes de búsqueda
app.get('/buscar', async (req, res) => {
    try {
        const { nombre } = req.query;
        const response = await axios.get(`${baseUrl}character/?name=${nombre}`);
        const results = response.data.results;
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al buscar personajes');
    }
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('La aplicación de búsqueda de personajes está en ejecución en el puerto 3000!');
});
