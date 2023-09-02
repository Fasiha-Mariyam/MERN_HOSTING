const app = require('express')
const { model } = require('mongoose')
const router = app.Router()
const {getAllProducts, createProducts, getProductByName, getProductByCategory, 
    getProductByBrand, getProductById, updateProduct, deleteProductById} = require('./controller')

router.post('/create-products', createProducts)
router.get('/get-all-products',getAllProducts)
router.get('/get-products-by-category/:CategoryName',getProductByCategory)
router.get('/get-products-by-brand/:BrandName', getProductByBrand)
router.get('/get-product-by-name',getProductByName)
router.get('/get-product-by-id/:_id',getProductById)
router.put('/update-product-by-id', updateProduct)
router.delete('/delete-product-by-id', deleteProductById)


module.exports = router