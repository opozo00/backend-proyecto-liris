const express = require('express');
const router = express.Router();
const cargoController = require('../controllers/cargoController');

router.get('/', cargoController.getCargos);

router.get('/:id', cargoController.getCargo);

router.put('/:id', cargoController.updateCargo);

router.delete('/:id', cargoController.deleteCargo);

module.exports = router;