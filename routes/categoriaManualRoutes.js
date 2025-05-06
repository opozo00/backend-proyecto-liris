const express = require('express');
const router = express.Router();
const categoriaManualController = require('../controllers/categoriaManualController');

router.get('/', categoriaManualController.getCategoriasManual);

router.get('/:id', categoriaManualController.getCategoriaManual);

router.put('/:id', categoriaManualController.updateCategoriaManual);

router.delete('/:id', categoriaManualController.deleteCategoriaManual);

module.exports = router;