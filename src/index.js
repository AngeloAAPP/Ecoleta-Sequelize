const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')

require('dotenv').config()
require('./database')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/image', express.static(path.resolve(__dirname, '..', 'uploads')))

const routes = require('./routes')
app.use('/api', routes)

app.listen(+process.env.PORT, ()=> console.log("Servidor rodando"))