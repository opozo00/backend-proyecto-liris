const Empleado = require('../models/empleado');

exports.getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.findAll();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener empleados", error });
    }
};
exports.getEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.findByPk(req.params.id);
        if (!empleado) {
            res.status(404).json({ message: 'Usuario no encontrado.' })
        } else {
            res.json(empleado);
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener empleado", error });
    }
};
