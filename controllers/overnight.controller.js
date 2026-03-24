const { Overnight, validLimitations, validProximity, validServices, validSignal, validStay, validProvince } = require('../models/Overnight.js')

const showAllOvernights = async (req, res) => {
  try {
    const overnights = await Overnight.find()
    res.json({
      count: overnights.length,
      overnights,
      message: 'controller overnights ready!!'
    })
  } catch (error) {

  }
}

const showOvernightById = async (req, res) => {
  try {
    const overnight = await Overnight.findById(req.params.id)
    if(!overnight) {
      return res.status(404).json({ error: 'Lugar de pernocta no encontrado' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  showAllOvernights,
  showOvernightById
}