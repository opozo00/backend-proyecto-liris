const db = require('../models');
const Cargo = db.Cargo;

exports.getCargos = async (req, res) => {
    try {
        const cargos = await Cargo.findAll(
            {
                include: [
                    { model: db.Departamento, as: 'departamento' }
                ]
            }
        );
        res.json(cargos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener cargos", error });
    }
};
exports.getCargo = async (req, res) => {
    try {
        const cargo = await Cargo.findByPk(req.params.id,
            {
                include: [
                    { model: db.Departamento, as: 'departamento' }
                ]
            }
        );
        if (!cargo) {
            res.status(404).json({ message: "Cargo no encontrado." })
        } else {
            res.json(cargo);
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener cargo", error });
    }
};
exports.updateCargo = async (req, res) => {
    const cargoId = req.params.id;
    const updateBody = req.body;
    try {
        const [columnasActualizadas] = await Cargo.update(updateBody, {
            where: { id_cargo: cargoId }
        });
        if (columnasActualizadas === 0) {
            res.status(404).json({ message: 'Cargo no encontrado.' });
        } else {
            const cargo = await Cargo.findByPk(cargoId);
            res.json(cargo);
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar cargo", error: error.message });
    }
};
exports.deleteCargo = async (req, res) => {
    const cargoId = req.params.id;
    try {
        const [columnasActualizadas] = await Cargo.destroy({
            where: { id_cargo: cargoId }
        });
        if (columnasActualizadas === 0) {
            res.status(404).json({ message: 'Cargo no encontrado.' });
        } else {
            res.json({ message: 'Cargo eliminado satisfactoriamente.' });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar cargo", error: error.message });
    }
};