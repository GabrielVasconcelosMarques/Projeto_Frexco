const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const app = express();

//inciializando dados no formatdo json
app.use(express.json());
app.use(cors());

// iniciando conexão com banco de dados / nome do banco = projeto
mongoose.connect('mongodb://localhost:27017/projeto', {useNewUrlParser: true});

// passando localização da pasta de todos os models 
requireDir('./src/models');

// passando por parametro porta e rotas do app e importando o arquivo de rotas de routes.js
app.use('/sistema', require('./src/routes/routes'));
app.listen(3005);