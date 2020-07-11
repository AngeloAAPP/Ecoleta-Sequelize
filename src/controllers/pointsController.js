const Point = require('../database/models/Point')
const Item = require('../database/models/Item')
const db = require('../database')
const {Op} = require('sequelize')
const fs = require('fs')
const path = require('path')

module.exports = {
    //Cria um ponto de coleta
    create: async(req,res, next) => {
        const {nome, email, whatsapp, latitude, longitude, cidade, uf, itens} = req.body;
        let imagem = req.file.filename;

        const regexItens = /^(\d,)*[\d]$/
        
        if(!regexItens.test(itens)){
            next();
            return res.status(400).json({sucess: false, message: "Selecione corretamente os itens de coleta"})
        }
        
        try{
            const result = await db.transaction( async (t) => {
                const modelItens = await Item.findAll({where: {id: {
                    [Op.in]: itens.split(',')
                }}, transaction: t})

                const point = await Point.create({imagem, nome, email, whatsapp, latitude, longitude, cidade, uf}, {transaction: t});
                
                await point.addItens(modelItens, {transaction: t})

                return {
                    ...point.dataValues,
                    imagem: `${process.env.URL_API}:${process.env.PORT}/image/${imagem}`, 
                    itens
                }
            })

            return res.json({sucess: true, data: result})
        }
        catch(err){
            //Chama o next para excluir a imagem enviada pelo usuário
            next();
            try{
                //obtem a mensagem de erro
                let erro = err.errors[0].message
                return res.status(400).json({sucess: false, message: erro})
            }
            catch(err){
                //Se o erro não foi gerado pela validação do sequelize, irá cair nesse catch
                return res.status(400).json({sucess: false, message: "Falha ao cadastrar ponto de coleta. Verifique se os dados foram inseridos corretamente"})
            }  
        }
        
    },
    //Lista um ponto de coleta específico
    show: async(req,res) => {
        const {point_id} = req.params;

        const point = await Point.findByPk(point_id, 
        {
            include: 
            {
                association: 'itens', attributes: ['titulo'], through: {attributes: []}
            }
        })

        if(!point)
            return res.status(400).json({sucess: false, err: 'Ponto de coleta não encontrado'})
        
        return res.json({
                sucess: true,
                data: {
                    ...point.dataValues, 
                    imagem: `${process.env.URL_API}:${process.env.PORT}/image/${point.imagem}`
                }
            })
    },
    //Lista pontos de coleta filtrados por cidade, uf e itens de coleta
    index: async(req,res) => {
        const {cidade, uf, itens} = req.query;
        try{

            const parsedItens = itens.split(",").map(item => Number(item.trim()))

            const points = await Point.findAll({
                where: {cidade, uf},
                include: {
                    association: 'itens',
                    attributes: [],
                    through: { attributes: [] },
                    where: {
                        id: {
                            [Op.in]: parsedItens
                        }
                    }
                }
            })

            const serializedPoints = points.map(point => (
                {...point.dataValues, imagem: `${process.env.URL_API}:${process.env.PORT}/image/${point.imagem}`}
            ))
       
            return res.json({sucess:true, data: serializedPoints})

        }
        catch(err){
            return res.status(400).json({sucess: false, err: "Parâmetros inválidos"})
        }
    },
    //Exclui a imagem enviada da pasta uploads
    failed: async(req,res) => {
        fs.unlink(path.resolve(__dirname, '..', '..', 'uploads', req.file.filename), (err)=> {
            if(err)
                console.log(err)
            else
                console.log("Arquivo deletado com sucesso")
        })
    }
}