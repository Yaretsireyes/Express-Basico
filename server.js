const express = require('express')

const port = process.env.PORT || 3005

const app = express()

// Metodos
app.get('/producto', (req, res) => {
    res.send(`Nombre del producto arroz`)
})

app.post('/producto', (req, res) => {
    res.send(`Nombre del producto ""`)
})

app.listen(port, () => {
    console.log(`servidor en el puerto ${port}`)
})


app.use((req, res) => {
    res.status(400).send('Error')
})