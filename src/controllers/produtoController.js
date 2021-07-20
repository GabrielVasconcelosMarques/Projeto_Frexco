const mongoose = require('mongoose');

// Trabalhando com o modelo de produto
const Produto = mongoose.model('Produto')


// Definição de métodos
module.exports = {

    // Insert
    async insert(req, res) {
        const produtos = await Produto.create(req.body);
        return res.json(produtos);
    },

    // Select all
    async selectAll(req, res) {
        // Criando recurso de paginação
        const { page } = req.query;

        // definindo que apareçam 15 produtos por página
        const produtos = await Produto.paginate({}, { page, limit: 15 });
        return res.json(produtos);
    },

    // Select pelo id
    async selectById(req, res) {
        const produtos = await Produto.findById(req.params.id);
        return res.json(produtos);
    },

    // Update
    async update(req, res) {
        const produtos = await Produto.findByIdAndUpdate(req.params.id, req.body, { new : true });
        return res.json(produtos);
    },

    // delete
    async delete(req, res) {
        await Produto.findByIdAndRemove(req.params.id);
        return res.send();
    }
}


