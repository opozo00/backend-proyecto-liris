const express = require('express');
const router = express.Router();
const empleadoManualController = require('../controllers/empleadoManualController');

router.get('/', empleadoManualController.getEmpleadoManual);

module.exports = router;