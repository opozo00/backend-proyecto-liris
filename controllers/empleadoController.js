const db = require('../models');
const Empleado = db.Empleado;

exports.getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.findAll(
            {
                include: [
                    { model: db.Cargo, as: 'cargo' },
                    { model: db.Departamento, as: 'departamento' },
                    {
                        model: db.Empleado,
                        as: 'jefe',
                        include: [
                            { model: db.Cargo, as: 'cargo' }
                        ]
                    },
                ]
            }
        );
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener empleados", error });
    }
};
exports.getEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.findByPk(req.params.id,
            {
                include: [
                    { model: db.Cargo, as: 'cargo' },
                    { model: db.Departamento, as: 'departamento' },
                    {
                        model: db.Empleado,
                        as: 'jefe',
                        include: [
                            { model: db.Cargo, as: 'cargo' }
                        ]
                    },
                ]
            }
        );
        if (!empleado) {
            res.status(404).json({ message: 'Usuario no encontrado.' })
        } else {
            res.json(empleado);
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener empleado", error });
    }
};
exports.updateEmpleado = async (req, res) => {
    const empleadoId = req.params.id;
    const updateBody = req.body;
    try {
        const [columnasActualizadas] = await Empleado.update(updateBody, {
            where: { id_empleado: empleadoId }
        });
        if (columnasActualizadas === 0) {
            res.status(404).json({ message: 'Empleado no encontrado.' });
        } else {
            const empleado = await Empleado.findByPk(empleadoId);
            res.json(empleado);
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar empleado", error: error.message });
    }
};
exports.deleteEmpleado = async (req, res) => {
    const empleadoId = req.params.id;
    try {
        const [columnasActualizadas] = await Empleado.destroy({
            where: { id_empleado: empleadoId }
        });
        if (columnasActualizadas === 0) {
            res.status(404).json({ message: 'Empleado no encontrado.' });
        } else {
            res.json({ message: 'Empleado eliminado satisfactoriamente.' });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar empleado", error: error.message });
    }
};
