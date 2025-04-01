const axios = require('axios')
const e = require('cors')

const apiDogs = 'https://dog.ceo/api/breeds/list/all'
const apiDogImages = 'https://dog.ceo/api/breed'

const fetchDogAPI = async () => {
    try {
        const response = await axios.get(`${apiDogs}`)
        return response.data
    } catch (error) {
        console.error("Erro ao buscar as raças dos cachorros:", error.message)
        throw error
    }
}

const fetchDogImage = async (breed) => {
    try {
        const response = await axios.get(`${apiDogImages}/${breed}/images/random`)
        return response.data.message
    } catch (error) {
        console.error(`Erro ao buscar imagem para a raça ${breed}:`, error.message)
        return null
    }
}

module.exports = {
    fetchDogAPI,
    fetchDogImage
}