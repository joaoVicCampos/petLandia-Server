const { getAllDogsService } = require("../services/dogs.jsx")

const getAllDogsController = async (req, res) => {
    try {
        const dogs = await getAllDogsService()
        res.status(200).send(dogs) // Envia os dados com a imagem para o frontend
    } catch (error) {
        res.status(500).send({ message: 'Erro ao buscar cachorros com imagens' })
    }
}

module.exports = {
    getAllDogsController
}
