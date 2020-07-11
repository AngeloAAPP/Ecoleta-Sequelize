const {Model, DataTypes} = require('sequelize')

class Item extends Model{
    static init(sequelize){
        super.init({
            imagem: DataTypes.STRING,
            titulo: DataTypes.STRING
        },{sequelize, tableName: 'itens'})
    }
    static associate(models){
        this.belongsToMany(models.Point, {
            foreignKey: 'item_id',
            as: 'points',
            through: 'point_itens'
        })
    }
}

module.exports = Item