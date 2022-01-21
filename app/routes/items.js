const express = require('express');

const controller = require('../controllers/items')

const router = express.Router()

/**
 * Ruta: /user GET
 */
router.get(
    `/`,
    controller.getData
)

module.exports = router