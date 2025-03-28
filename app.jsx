const express = require('express')
const cors = require('cors')


const app = express()
app.use(express.json())

app.use(cors({ origin: "*" }))

const port = 8080


app.listen(port, () => {
    console.log(`Estou on na porta ${port}`);
})