const { Hiking } = require('../models/Hiking.js')

const hikingController = {
  
  async getAllHikings (req, res) {
    try {
      const hikings = await Hiking.find()
      res.json({
        count: hikings.length,
        hikings,
        message: 'controller hiking ready!!'
      })
    } catch (error) { 
      res.status(404).json({ error: error.message })
    }
  },

  async getHikingById (req, res) {
    try {
      const id = req.params._id
      const hiking = await Hiking.findById(id)
      if(!hiking) {
        return res.status(404).json({ error: 'Ruta no encontrada' })
      }
      res.json(hiking)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
}

module.exports = hikingController