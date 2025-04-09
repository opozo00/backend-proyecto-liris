const CategoriaManual = require('../models/categoria_manual');

exports.getCategoriaManual = async (req, res) => {
    try {
        const categorias = await CategoriaManual.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener categorias manual", error });
    }
}