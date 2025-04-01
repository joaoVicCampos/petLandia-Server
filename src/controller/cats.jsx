const { getAllCatsService } = require("../services/cats.jsx")

const getAllCatsController = async (req, res) => {
    try {
        console.log('controller ativado')
        const cats = await getAllCatsService()
        console.log('dados recebidos', cats);
        res.send(cats)
    } catch (error) {
        res.send(error.message)
        res.status(404)
    }
}

module.exports = {
    getAllCatsController
}