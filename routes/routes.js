const express = require('express');
const router = express.Router();
const { devisController } = require('../controllers/controller');


router.post('/', devisController);

module.exports = router;