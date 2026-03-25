const express = require('express')
const router = express.Router()
const Overnight = require('../models/Overnight.js')
const OvernightController = require('../controllers/overnight.controller.js')

router.get('/', OvernightController.getAllOvernights)
router.get('/:_id', OvernightController.getOvernightById)
router.post('/', OvernightController.createOvernight)
router.put('/edit/:_id', OvernightController.updateOvernight)
router.delete('/:_id', OvernightController.deleteOvernight)

module.exports = router