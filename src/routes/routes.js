const express = require('express');
const routes = express.Router();
const produtoController = require('../controllers/produtoController');

// Criação de rota para inserir dados
routes.post('/produtos', produtoController.insert);

// Criação de rota para visualizar dados
routes.get('/produtos', produtoController.selectAll);

// Criação de rota para visualizar dados pelo id
routes.get('/produtos/:id', produtoController.selectById);

// Criação de rota para update
routes.put('/produtos/:id', produtoController.update);

// Criação de rota para deletar
routes.delete('/produtos/:id', produtoController.delete);

module.exports = routes;