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

  async createHiking (req, res) {
    try{
      const newHiking = await Hiking.create({ ...req.body })
      res.status(201).json(newHiking)
    } catch (error) {
        res.status(400).json({  error: error.message })
    }
  },

  async updateHiking (req, res) {
    try {
      const id = req.params._id
      const hikingData = req.body
      const hiking = await Hiking.findByIdAndUpdate(id, hikingData, { returnDocument: 'after', runValidators: true })
      if (!hiking) {
        return res.status(404).json({ error: 'Ruta no encontrada' })
      }
      res.json({ hiking, message: 'Ruta actualizada correctamente' })
    } catch (error) {
        res.status(400).json({  error: error.message })
    }
  },

  async deleteHiking (req, res) {
    try {
      const id = req.params._id
      const dltHiking = await Hiking.findByIdAndDelete(id)
      if (!dltHiking) {
        return res.status(404).json({ error: 'Ruta no encontrada' })
      }
      res.json({ message: 'Ruta eliminada correctamente' })
    } catch (error) {
        res.status(400).json({  error: error.message })
    }
  }
}

module.exports = hikingController