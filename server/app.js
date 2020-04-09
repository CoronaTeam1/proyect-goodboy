// Enviroment variables
require('dotenv').config();

// Database connection
require('./configs/mongoose.config')

// Application instance
const express = require('express')
const app = express()

// Configs
require('./configs/cloudinary.config')
require('./configs/locals.config')(app)
require('./configs/middleware.config')(app)
require('./configs/session.config')(app)


// Base URLS
app.use('/api/registerdog', require('./routes/registerdog.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/files', require('./routes/files.routes'))
app.use('/api/breed', require('./routes/breed.routes'))



module.exports = app;
