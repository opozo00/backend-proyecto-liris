const express = require('express');
const router = express.Router();
const categoriaManualController = require('../controllers/categoriaManualController');

router.get('/', categoriaManualController.getCategoriaManual);

module.exports = router;