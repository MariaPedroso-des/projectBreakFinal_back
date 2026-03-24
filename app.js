// Aquí quiero importar express, crear app, configurar middlewares y montar rutas
const express = require('express')
const cors = require('cors')
const app = express()

const hikingsRoutes = require('./routes/hikings.routes.js')
const overnightRoutes = require('./routes/overnight.routes.js')

// Habilita CORS para todas las solicitudes
app.use(cors())
app.use(express.json())

// Válido solo si envío formularios HTML clásicos --que creo que no porque usamos REACT y manda JSON
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Working')
})

// Añadimos api para diferenciar los endpoints del back con recpecto de las rutas del front
app.use('/api/hikings', hikingsRoutes)
app.use('/api/overnights', overnightRoutes)

module.exports = app