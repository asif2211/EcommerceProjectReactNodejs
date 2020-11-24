const express = require('express');
const  data = require('./data.js');
const app = express()
const port  = process.env.PORT ||5000


app.get('/api/products/:id', (req, res) => {
  console.log(res);
  const product = data.products.find((x) => x._id == req.params.id);
  if(product){
    res.send(product)
  }
  else{
  res.status(404).send({message:'Product not found yet'})
  }
  
    
  })
app.get('/api/products', (req, res) => {
    res.send(data.products)
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})