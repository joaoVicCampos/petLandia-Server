const express = require('express')
const cors = require('cors')
const catsRoute = require('./src/routes/cats.jsx')
const dogsRoute = require('./src/routes/dogs.jsx')


const app = express()
app.use(express.json())

app.use(cors({ origin: "*" }))

const port = 8080

app.use('/cats', catsRoute)
app.use('/dogs', dogsRoute)

app.listen(port, () => {
    console.log(`Estou on na porta ${port}`);
})