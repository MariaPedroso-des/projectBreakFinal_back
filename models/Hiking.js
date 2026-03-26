//Aquí definimos qué es una ruta utilizando mongoose
const mongoose = require('mongoose')

const validDifficulty = ['baja', 'media', 'ténica']

const validTerrain = [
  'firme compacto y estable',
  'camino forestal',
  'zonas piedras sueltas o raíces',
  'pendientes moderadas',
  'arena o grava suelta',
  'arena o grava suelta con gran pendiente',
  'terreno arcilloso',
]

const validWater = [
  'río permanente',
  'arroyo temporal',
  'rambla',
  'cascadas o rápidos',
  'laguna o embalse',
  'fuentes naturales',
  'desembalses de agua sin previo aviso'
]

const validApproved = [
  'SL | sendero local',
  'PR | pequeño recorrido',
  'GR | gran recorrido'
]

const validProvince = [
  'Álava',
  'Albacete',
  'Alicante',
  'Almería',
  'Asturias',
  'Ávila',
  'Badajoz',
  'Barcelona',
  'Burgos',
  'Cáceres',
  'Cádiz',
  'Cantabria',
  'Castellón',
  'Ciudad Real',
  'Córdoba',
  'Cuenca',
  'Girona',
  'Granada',
  'Guadalajara',
  'Guipúzcoa',
  'Huelva',
  'Huesca',
  'Illes Balears',
  'Jaén',
  'La Coruña',
  'La Rioja',
  'Las Palmas',
  'León',
  'Lleida',
  'Lugo',
  'Madrid',
  'Málaga',
  'Murcia',
  'Navarra',
  'Ourense',
  'Palencia',
  'Pontevedra',
  'Salamanca',
  'Santa Cruz de Tenerife',
  'Segovia',
  'Sevilla',
  'Soria',
  'Tarragona',
  'Teruel',
  'Toledo',
  'Valencia',
  'Valladolid',
  'Vizcaya',
  'Zamora',
  'Zaragoza'
]

const HikingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  province: {
    type: String,
    enum: validProvince,
    required: true,
    trim: true
  },
  difficulty: {
    type: String,
    enum: validDifficulty,
    required: true
  },
  distanceKm: {
    type: Number,
    required: true,
    min: 1,
    max: 50
  },
  typeTerrain: [{
    type: String,
    enum: validTerrain
  }],
  description: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
  },
  approvedFEDME: {
    type: String,
    enum: validApproved
  },
  mapsLink: {
    type: String,
    trim: true
  },
  accessWater: [{
    type: String,
    enum: validWater
  }]
}, { timestamps: true })

const Hiking = mongoose.model('Hiking', HikingSchema)

module.exports = {
  Hiking,
  validProvince,
  validTerrain,
  validDifficulty,
  validWater,
  validApproved
}