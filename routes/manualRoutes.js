const express = require('express');
const router = express.Router();
const manualController = require('../controllers/manualController');

router.get('/', manualController.getManuales);

router.get(':id', manualController.getManual);

router.put(':id', manualController.updateManual);

router.delete(':id', manualController.deleteManual);

module.exports = router;