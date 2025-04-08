const Empleado = require('../models/empleado');

exports.getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.findAll();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener empleados", error });
    }
};
