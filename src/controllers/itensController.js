const Item = require('../database/models/Item')
module.exports = {
    index: async(req,res) => {
        const itens = await Item.findAll({attributes: ['id', 'imagem', 'titulo']})
        const serializedItens = itens.map(item => (
            {
                id: item.id,
                titulo: item.titulo,
                url_imagem: `${process.env.URL_API}:${process.env.PORT}/image/${item.imagem}`
            }
        ))
        return res.json(serializedItens)
    }
}