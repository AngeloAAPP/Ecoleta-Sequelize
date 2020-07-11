const {Sequelize} = require('sequelize');
const dbConfig = require('../config/database');

//import models
const Point = require('./models/Point')
const Item = require('./models/Item')

const connection = new Sequelize(dbConfig);

Point.init(connection)
Item.init(connection)

Point.associate(connection.models)
Item.associate(connection.models)

module.exports = connection;