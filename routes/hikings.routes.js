const express = require('express')
const router = express.Router()
const HikingController = require('../controllers/hikings.controller.js')

router.get('/', HikingController.getAllHikings)

module.exports = router