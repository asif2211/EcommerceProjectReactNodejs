const express = require('express');
const  data = require('./data.js');
const app = express()
const port  = process.env.PORT ||30001


app.get('/api/products', (req, res) => {
    res.send(data.products)
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})