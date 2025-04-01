const axios = require('axios')

const apiCats = 'https://api.thecatapi.com/v1'
const API_KEY = 'live_KktrbWuPczaQQrMCmA1pR3zVcNqmZSTNUQnz3ofeLRqpDxTuLB7nH0MkFrsDa6AU'

const fetchCatAPI = async () => {
    try {
        const response = await axios.get(`${apiCats}/breeds`, {
            headers: { 'x-api-key': API_KEY }
        })
        return response.data
    } catch (error) {
        console.error("Erro ao buscar os gatos:", error.message)
        throw error
    }
}

module.exports = { fetchCatAPI }