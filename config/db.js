const mongoose = require('mongoose')

const dbConnection = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Database successfully connected')
  } catch (error) {
    console.error('Error initializing the database', error.message)
    throw error; // en relación al último bloque del index
  }
}

module.exports = {
  dbConnection,
}