const Cargo = require('../models/cargo');

exports.getCargos = async (req, res) => {
    try {
        const cargos = await Cargo.findAll();
        res.json(cargos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener cargos", error });
    }
}