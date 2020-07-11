const {Router} = require('express')
const {create, show, index, failed} = require('../controllers/pointsController')

const multer = require('multer')
const multerConfig = require('../config/multer')

const upload = multer(multerConfig)

const routes = Router();

routes.post('/',upload.single('imagem'), create, failed)
routes.get('/', index)
routes.get('/:point_id',show)

module.exports = routes