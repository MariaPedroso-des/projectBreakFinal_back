const { Overnight } = require('../models/Overnight.js')

const overnightController = {
  
  async getAllOvernights (req, res) {
    try {
      const overnights = await Overnight.find()
      res.json({
        count: overnights.length,
        overnights,
        message: 'controller overnights ready!!'
      })
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
  },

  async getOvernightById (req, res) {
    try {
      const id = req.params._id
      const overnight = await Overnight.findById(id)
      if(!overnight) {
        return res.status(404).json({ error: 'Lugar de pernocta no encontrado' })
      }
      res.json(overnight)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
  },

  async createOvernight (req, res) {
    try {
      const newOvernight = await Overnight.create({ ...req.body })
      res.status(201).json(newOvernight)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
  },

  async updateOvernight (req, res) {
    try {
      const id = req.params._id
      const overnightData = req.body
      const overnight = await Overnight.findByIdAndUpdate(id, overnightData, { returnDocument: 'after', runValidators: true })
      if(!overnight) {
        return res.status(404).json({ error: 'Zona de pernocta no encontrada' })
      }
      res.json({ overnight, message: 'Zona de pernocta actualizada correctamente' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },

  async deleteOvernight (req, res) {
    try {
      const id = req.params._id
      const dltOvernight =  await Overnight.findByIdAndDelete(id)
      if (!dltOvernight) {
        return res.status(404).json({ error: 'Ubicación de pernocta no encontrada' })
      }
      res.json({ message: 'Zona de pernocta eliminada correctamente' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
  }
}

module.exports = overnightController