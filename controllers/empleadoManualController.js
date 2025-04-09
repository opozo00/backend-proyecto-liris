const EmpleadoManual = require('../models/empleado_manual');

exports.getEmpleadoManual = async (req, res) => {
    try {
        const empleadosManuales = await EmpleadoManual.findAll();
        res.json(empleadosManuales);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener manuales de empleados", error });
    }
}