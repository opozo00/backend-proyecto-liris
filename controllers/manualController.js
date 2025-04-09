const Manual = require('../models/manual');

exports.getManuales = async (req, res) => {
    try {
        const manuales = await Manual.findAll();
        res.json(manuales);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener manuales", error });
    }
}
exports.getManual = async (req, res) => {
    try {
        const manual = await Manual.findByPk(req.params.id);
        if (!manual) {
            res.status(404).json({ message: 'Manual no encontrado.' })
        } else {
            res.json(manual);
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener manual", error });
    }
}