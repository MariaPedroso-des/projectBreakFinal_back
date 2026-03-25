//Aquí definimos qué es una ubicación de pernocta utilizando mongoose
const mongoose = require('mongoose')

const validServices = [
  'sin servicios',
  'vaciado de aguas grises',
  'vaciado de aguas negras',
  'llenado de agua potable',
  'gestión de residuos',
  'iluminación nocturna',
  'área de picnic',
  'sombra'
]
const validProximity = [
  'sin servicios cercanos',
  'supermercados',
  'bares-restaurantes',
  'bares-restaurantes pet friendly',
  'puntos de interés turístico',
  'inicio rutas de senderismo',
  'centro de interpretación',
  'vistas panorámicas',
  'parque',
  'pipican',
  'hotel canino',
  'veterinario'
]
const validSignal = [
  'sin servicio',
  '4G',
  'solo llamadas'
]
const validLimitations = [
  'altura restringida',
  'área natural protegida',
  'aparcamiento de día'
]
const validStay = [
  'sin restricción',
  '24h',
  '48h',
  '72h'
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

const OvernightSchema = new mongoose.Schema({
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
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  capacity: {
    type: Number,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
  },
  //Campo reservado para futuro. |||| Estándar GeoJSON para hacer búsquedas por cercanía. Estructura:
  location: {
    type: { 
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number] //longitud, latitud(al revés que normalmente)
    },
},
  mapsLink: {
    type: String,
    trim: true
  },
  services: [{
    type: String,
    enum: validServices,
  }],
  proximity: [{
    type: String,
    enum: validProximity,
  }],
  signal: {
    type: String,
    enum: validSignal,
  },
  stay: {
    type: String,
    enum: validStay,
  },
  limitations: [{
    type: String,
    enum: validLimitations
  }],
}, { timestamps: true })

const Overnight = mongoose.model('Overnight', OvernightSchema)

module.exports = {
  Overnight,
  validLimitations,
  validProximity,
  validServices,
  validSignal,
  validStay,
  validProvince,
}