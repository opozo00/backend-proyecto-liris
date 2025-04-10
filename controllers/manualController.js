const Manual = require('../models/manual');

exports.getManuales = async (req, res) => {
    try {
        const manuales = await Manual.findAll();
        res.json(manuales);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener manuales", error });
    }
};
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
};
exports.updateManual = async (req, res) => {
    const manualId = req.params.id;
    const bodyManual = req.body;
    try {
        const [columnasActualizadas] = await Manual.update(bodyManual, {
            where: { id_manual: manualId }
        });
        if (columnasActualizadas === 0) {
            res.status(404).json({ message: 'Manual no encontrado' });
        } else {
            const manual = await Manual.findByPk(manualId);
            res.json(manual);
        }

    } catch (error) {
        res.status(500).json({ message: "Error al actualizar manual", error });
    }
};
exports.deleteManual = async (req, res) => {
    const manualId = req.params.id;
    try {
        const [columnasActualizadas] = await Manual.destroy({
            where: { id_manual: manualId }
        });
        if (columnasActualizadas === 0) {
            res.status(404).json({ message: 'Manual no encontrado' });
        } else {
            res.json({ message: 'Manual eliminado satisfactoriamente.' })
        }

    } catch (error) {
        res.status(500).json({ message: "Error al actualizar manual", error });
    }
};