const Category = require('./model')
const { connect } = require('mongoose')
require('dotenv').config()

const getAllCategory = async(req, res) => {
   
   try {
      
      await connect(process.env.MONGO_URI)
      const allCategories = await Category.find()
      res.json({
             Category: allCategories
      })

   } 
   
   catch (error) {

      res.status(400).json({
          message : error.message
      })
      
   }

}

const getCategoryByName = async(req, res) => {
   try {
      const { CategoryName } = req.query
      await connect(process.env.MONGO_URI)
      const category = await Category.findOne({ CategoryName })
      if(category == null)
      { res.json({
         message: "not available to show"
      })
      }
      else{
         res.json({ category })
      }

   } 
   catch (error) {
      res.status(400).json({
          message : error.message
      }) 
   }

  }
  
const getCategoryById = async(req, res) => {
   try {
      const { _id } = req.query
      await connect(process.env.MONGO_URI)
      const category = await Category.findById({ _id })
         res.json({ category })

   } 
   catch (error) {
      res.status(400).json({
          message : error.message
      }) 
   }
 }

 const createCategory = async(req, res) => {
   const { CategoryName, CategoryImage } = req.body;
   if(!CategoryImage || !CategoryName)
   {
      res.status(403).json({
         message : "Missing Required Field"
      })
   }
   else 
   {
      try {
         await connect(process.env.MONGO_URI)
         const categoryExists = await Category.exists({ CategoryName })
        if (categoryExists) {
            res.status(208).json({
                message: "This Category Already Exists",
            })
        }
        else{
         await Category.create({ CategoryName, CategoryImage })
         const allCategories = await Category.find()
         res.json({
            message: "Category Added Successfully",
                Category: allCategories
         })

        }
         
       } 
      
       catch (error) 
      {
  
         res.status(400).json
         ({
             message : error.message
         })
         
      }
  
   }

 }

 const updateCateory = async(req, res) => {
   const {_id,CategoryName,CategoryImage} = req.body
   const filter = { _id};
   const update = {CategoryName,CategoryImage};
    try {
      await connect(process.env.MONGO_URI)
      await Category.findOneAndUpdate(filter, update, {
         new: true
       });

       const category = await Category.find()

       res.json({
         message:"Succes",
         category
       })
      } 
    
    catch (error) {

       res.status(400).json({
           message : error.message
       })
       
    }

 }

 const deleteCategory = async(req, res) => {
   try {
      const { _id } = req.body
      await connect(process.env.MONGO_URI)
      await Category.findOneAndDelete({ _id })
      const category = await Category.find()
      res.status(200).json({ 
         message :"Deleted Succesfully"
         ,category})

   } 
   catch (error) {
      res.status(400).json({
          message : error.message
      }) 
   }

 }

module.exports = { getAllCategory,getCategoryByName,getCategoryById,updateCateory,createCategory,deleteCategory}