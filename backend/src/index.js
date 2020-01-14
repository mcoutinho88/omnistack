const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ypf9o.mongodb.net/test?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true
})

app.use(express.json());  // precisa vir antes de routes

app.use(routes);

// metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:

// Query Params: utilizados no metodo GET (busca)  -> request.query (filtros, ordenacao, paginacao, ..)
// Route Params: mais usados no PUT e DELETE -> request.params (identificar um recurno na alteracao ou na remocao)
// Body: mais usados no PUT e no POST -> request.body (dados para criacao ou alteracao de um registro)

// MongoDB (nao-relacional)

app.listen(3333);

