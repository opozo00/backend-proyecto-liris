const Departamento = require('../models/departamento');

exports.getDepartamentos = async (req, res) => {
    try {
        const departamentos = await Departamento.findAll();
        res.json(departamentos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener departamentos", error });
    }
}