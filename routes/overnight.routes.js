const express = require('express')
const router = express.Router()
const overnightController = require('../controllers/overnight.controller.js')

router.get('/', overnightController.showAllOvernights)
router.get('/:id', overnightController.showOvernightById)
module.exports = router