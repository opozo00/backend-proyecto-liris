const express = require('express');
const router = express.Router();
const manualController = require('../controllers/manualController');

router.get('/', manualController.getManuales);

module.exports = router;