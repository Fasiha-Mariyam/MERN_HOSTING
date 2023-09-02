const express = require('express')
const cors = require('cors')
const path =require('path')
const app = express()
require('dotenv').config()

const clientpath = path.join(__dirname,'./client/dist')
app.use('/',express.static(clientpath))

const CategoryRouter = require('./api/category/router')
const UserRouter = require('./api/users/router')
const BrandRouter = require('./api/brands/router')
const ProductRouter = require('./api/products/router')
const OrderRouter = require('./api/orders/router')
const port = process.env.SERVER_PORT || 3200

app.use(cors())
app.use(express.json())
app.use('/api',CategoryRouter)
app.use('/api',UserRouter)
app.use('/api',BrandRouter)
app.use('/api',ProductRouter)
app.use('/api', OrderRouter)

app.get('*',(req,res)=>{
  res.sendFile( path.join(__dirname,'./client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})