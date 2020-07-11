const {Model, DataTypes} = require('sequelize')

class Point extends Model{
    static init(sequelize){
        super.init({
            imagem: DataTypes.STRING,
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Nome é obrigatório"
                    },
                    len: {
                        args: [3,50],
                        msg: "Nome deve ter entre 3 e 50 caracteres"
                    }
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Email é obrigatório"
                    },
                    isEmail: {
                        msg: "Email inválido"
                    }
                }
            },
            whatsapp: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Whatsapp é obrigatório'
                    },
                    len: {
                        args: [11,11],
                        msg: "Whatsapp deve conter 11 caracteres: ddd e numero"
                    }
                }
            },
            latitude: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Latitude é obrigatório'
                    }
                }
            },
            longitude: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Longitude é obrigatório'
                    }
                }
            },
            cidade: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Cidade é obrigatória"
                    }
                }
            },
            uf: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "UF é obrigatória"
                    },
                    len: {
                        args: [2,2],
                        msg: "UF deve ter 2 caracteres"
                    }
                }
            }
        },{sequelize, tableName: 'points'})
    }
    static associate(models){
        this.belongsToMany(models.Item, {
            foreignKey: 'point_id',
            as: 'itens',
            through: 'point_itens'
        })
    }
}

module.exports = Point