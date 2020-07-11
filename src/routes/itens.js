const {Router} = require('express')
const {index} = require('../controllers/itensController')

const routes = Router();

routes.get('/', index)

module.exports = routes