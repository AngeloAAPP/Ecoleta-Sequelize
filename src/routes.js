const {Router} = require('express')
const itens = require('./routes/itens')
const points = require('./routes/points')

const routes = Router();

routes.use('/itens', itens)
routes.use('/points', points)

module.exports = routes;