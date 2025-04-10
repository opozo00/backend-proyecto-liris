const express = require('express');
const router = express.Router();
const empleadoManualController = require('../controllers/empleadoManualController');

router.get('/', empleadoManualController.getEmpleadosManual);

router.get('/:id', empleadoManualController.getEmpleadoManuales);

router.put('/:id', empleadoManualController.updateEmpleadoManuales);

router.delete('/:id', empleadoManualController.deleteEmpleadoManuales);

module.exports = router;