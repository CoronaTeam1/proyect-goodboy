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
app.use('/api/auth', require('./routes/auth.routes'))


module.exports = app;
