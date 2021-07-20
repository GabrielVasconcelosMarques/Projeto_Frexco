const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

// criação do tipo float para trabalhar com dados referentes ao valor do produto 
const Float = require('mongoose-float').loadType(mongoose);

// Criação do schema para representar produto no banco de dados
const ProdutoSchema = new mongoose.Schema({
    codigo: {
        type: Number,
        required: true,
        min: 1,
        max: 99999999,
        unique: true,
        trim: true
    },
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100,
        trim: true
    },
    categoria: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100,
        trim: true
    },
    valor: {
        type: Float,
        required: true,
        min: 0,
        max: 99999999,
        trim: true,
    },
    quantidade: {
        type: Number,
        required: true,
        min: 1,
        max: 99999999,
        trim: true
    },
    registro: {
        type: Date,
        default: Date.now
    }
});

// plugin pra paginação do schema 
ProdutoSchema.plugin(mongoosePaginate);

// Dando nome ao modelo e mostrando sua localização
mongoose.model('Produto', ProdutoSchema);

