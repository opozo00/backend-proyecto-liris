const Manual = require('../models/manual');

exports.getManuales = async (req, res) => {
    try {
        const manuales = await Manual.findAll();
        res.json(manuales);
    } catch (error) {
        res.status(500).json({ messageg: "Error al obtener manuales", error });
    }
}