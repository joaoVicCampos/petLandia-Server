const { data } = require('react-router')
const { fetchCatAPI } = require('./src/api/catAPI.jsx')

fetchCatAPI()
    .then(data => console.log('API retornou:', data))
    .catch(error => console.error('Erro ao buscar API:', error))