//Aquí quiero cargar la variables de entorno, conectar la BD y arrancar servidor 
require('dotenv').config()

const { dbConnection } = require('./config/db.js')
const app = require('./app.js')

const PORT = process.env.PORT || 3000

const startServer = async () => {
  try {
    await dbConnection()
    app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`))
  } catch (error) {
    console.error('Error to start app', error.message)
    process.exit(1); // si falla la conexión
  }
}
startServer()