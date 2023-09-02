
const app = require('express')
const { model } = require('mongoose')
const router = app.Router()
const { getAllCategory,getCategoryByName,getCategoryById,updateCateory,createCategory,deleteCategory} = require('./controller')

router.get('/get-all-category', getAllCategory)
router.get('/get-category-by-name', getCategoryByName)
router.get('/get-category-by-id', getCategoryById)
router.post('/create-category', createCategory)
router.put('/update-category', updateCateory)
router.delete('/delete-category', deleteCategory)


module.exports = router