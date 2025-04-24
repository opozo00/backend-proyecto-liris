const db = require('../models');
const EmpleadoManual = db.EmpleadoManual;

exports.getEmpleadosManual = async (req, res) => {
    try {
        const empleadosManuales = await EmpleadoManual.findAll(
            {
                include: [
                    { model: db.Empleado, as: 'empleado' },
                    {
                        model: db.Manual, as: 'manual',
                        include: [
                            { model: db.CategoriaManual, as: 'categoria' }
                        ]
                    }
                ]
            }
        );
        res.json(empleadosManuales);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener manuales de empleados", error });
    }
};

exports.getEmpleadoManuales = async (req, res) => {
    try {
        const empleadoManuales = await EmpleadoManual.findByPk(req.params.id,
            {
                include: [
                    { model: db.Empleado, as: 'empleado' },
                    { model: db.Manual, as: 'manual' }
                ]
            }
        );
        if (!empleadoManuales) {
            res.status(404).json({ message: "Empleado-Manual no encontrado" });
        } else {
            res.json(empleadoManuales);
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener manuales de empleados", error });
    }
};

exports.updateEmpleadoManuales = async (req, res) => {
    const empleadoManualesId = req.params.id;
    const updateBody = req.body;
    try {
        const [columnasActualizadas] = await EmpleadoManual.update(updateBody, {
            where: { id_empleado_manual: empleadoManualesId }
        });
        if (columnasActualizadas === 0) {
            res.status(404).json({ message: 'Empleado - Manual no encontrado.' });
        } else {
            const empleadoManuales = await EmpleadoManual.findByPk(empleadoManualesId);
            res.json(empleadoManuales);
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar empleado-manual", error: error.message });
    }
};
exports.deleteEmpleadoManuales = async (req, res) => {
    const empleadoManualesId = req.params.id;
    try {
        const [columnasActualizadas] = await EmpleadoManual.destroy({
            where: { id_empleado: empleadoManualesId }
        });
        if (columnasActualizadas === 0) {
            res.status(404).json({ message: 'Empleado - Manual no encontrado.' });
        } else {
            res.json({ message: 'Manual del empleado eliminado satisfactoriamente.' });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar empleado - manual", error: error.message });
    }
};
