const db = require('../models');
const Departamento = db.Departamento;

exports.getDepartamentos = async (req, res) => {
    try {
        const departamentos = await Departamento.findAll();
        res.json(departamentos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener departamentos", error });
    }
};

exports.getDepartamento = async (req, res) => {
    try {
        const departamento = await Departamento.findByPk(req.params.id);
        if (!departamento) {
            res.status(404).json({ message: "Departamento no encontrado" });
        } else {
            res.json(departamento);
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener departamento", error });
    }
};

exports.updateDepartamento = async (req, res) => {
    const departamentoId = req.params.id;
    const updateBody = req.body;
    try {
        const [columnasActualizadas] = await Departamento.update(updateBody, {
            where: { id_departamento: departamentoId }
        });
        if (columnasActualizadas === 0) {
            res.status(404).json({ message: 'Departamento no encontrado.' });
        } else {
            const departamento = await Departamento.findByPk(departamentoId);
            res.json(departamento);
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar departamento", error: error.message });
    }
};
exports.deleteDepartamento = async (req, res) => {
    const departamentoId = req.params.id;
    try {
        const [columnasActualizadas] = await Departamento.destroy({
            where: { id_departamento: departamentoId }
        });
        if (columnasActualizadas === 0) {
            res.status(404).json({ message: 'Departamento no encontrado.' });
        } else {
            res.json({ message: 'Departamento eliminado satisfactoriamente.' });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar departamento", error: error.message });
    }
};