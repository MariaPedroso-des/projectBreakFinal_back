  >[!IMPORTANT]
  >
  >Backend - App de rutas y pernocta pet friendly
  
# QUÉ ES EL PROYECTO

  API REST desarrollada con Node.js, Express, MongoDB para gestionar, publicar y consultar rutas de senderismo y ubicaciones de pernocta camper orientadas a usuarios que viajan con su perrete.

## QUÉ TECNOLOGÍAS UTILIZA

  - Node.js
  - Express
  - MongoDB Atlas
  - Mongoose
  - Dotenv
  - CORS

## CÓMO SE INSTALA

  1. Clonar el repositorio de [GitHub](https://github.com/MariaPedroso-des/projectBreakFinal_back)
  2. Instalar dependencias

  ```bash
  npm install
  ```

## CÓMO SE EJECUTA

  - `npm start` -> inicia el servidor
  - `npm run dev` -> inicia el servidor en modo desarrollo

## VARIABLES DE ENTORNO QUE NECESITA

  Crear un archivo con las variables de entorno necesarias:

  ```env
      PORT=3000
      MONGO_URI= tu_uri_de_mongodb
  ```
  Puedes utilizar el .env.example como referencia :)

## ESTRUCTURA DEL PROYECTO

  ```bash
  ├── config
        └── db.js
  ├── controllers
        ├── hikings.controller.js
        ├── overnight.controller.js
  ├── models
        ├── Hiking.js
        ├── Overnight
  ├── routes
        ├── hikings.routes.js
        ├── overnight.routes.js
  ├── .env.example
  ├── app.js
  ├── index.js
  └── package.json
  ```

## CARACTERÍSTICAS PRINCIPALES

  - Gestión CRUD de rutas de senderismo
  - Gestión CRUD de ubicaciones de pernocta
  - Persistencia de datos con MongoDB Atlas
  - Estructura organizada en rutas, controladores y modelos

## ENDPOINTS

  ### Hiking
    - `GET /api/hikings`
    - `GET /api/hikings/:_id`
    - `POST /api/hikings`
    - `PUT /api/hikings/edit/:_id`
    - `DELETE /api/hikings/:_id`

  ### Overnight
    - `GET /api/overnights`
    - `GET /api/overnights/:_id`
    - `POST /api/overnights`
    - `PUT /api/overnights/edit/:_id`
    - `DELETE /api/overnights/:_id`

## MODELO DE DATOS

  ### Hiking
  Contiene información sobre rutas de senderismo:
    - nombre
    - provincia
    - dificultad
    - distancia en kilómetros
    - tipo de terreno
    - descripción
    - imagen
    - enlace a Google maps(como aplicación de referencia para ubicarnos)
    - acceso al agua

  ### Overnight
  Contiene información sobre ubicaciones de pernocta:
    - nombre
    - provincia
    - descripción
    - capacidad
    - imagen
    - enlace a Google maps(como aplicación de referencia para ubicarnos)
    - servicios
    - proximidad a recursos
    - cobertura
    - limitación de estancia
    - limitaciones generales

## PARKINGLOT

  - Mapa navegable
  - Geolocalización
  - Integración con Google Maps
  - Avisos sobre procesionaria por las especies de árboles
  - Base de datos de zonas camper oficiales
  - Servicios cercanos (veterinarios, hoteles para mascotas)
  - Sistema de usuarios y perfiles
  - Subida real de imágenes
  - Valoraciones de rutas
  - Sistema de favoritos
  - Filtros avanzados