const { fetchCatAPI } = require('../api/catAPI.jsx')

const getAllCatsService = async () => {
    console.log('chamando API...');
    const response = await fetchCatAPI()
    console.log('Respota da API', response);

    return response
}

module.exports = {
    getAllCatsService
}