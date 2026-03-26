const express = require('express')
const router = express.Router()
const HikingController = require('../controllers/hikings.controller.js')

router.get('/', HikingController.getAllHikings)
router.get('/:_id', HikingController.getHikingById)
router.post('/', HikingController.createHiking)
router.put('/edit/:_id', HikingController.updateHiking)
router.delete('/:_id', HikingController.deleteHiking)

module.exports = router