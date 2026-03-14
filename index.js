const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hola, Heroku</h1>
    <p>Esta es mi aplicación simple para la actividad 2.3 de ambientes efímeros.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});