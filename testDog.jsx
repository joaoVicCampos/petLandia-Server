const axios = require('axios');

axios.get('http://localhost:8080/dogs')
    .then(response => {
        console.log('Resposta da API:', response.data);
    })
    .catch(error => {
        console.error('Erro ao chamar a API:', error.message);
    });
