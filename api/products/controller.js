const Product = require('./model')
const { connect } = require('mongoose')
require('dotenv').config()


const createProducts = async (req, res) => {
    const { ProductName, Price, BrandName, CategoryName, Image, Description, Rating } = req.body;

    if( !ProductName|| !Price|| !BrandName|| !CategoryName|| !Image|| !Description|| !Rating )
    {
       res.status(403).json({
          message : "Missing Required Field"
       })
    }
    else 
    {
       try {
          await connect(process.env.MONGO_URI)
          const productExists = await Product.exists({ ProductName })
         if (productExists) {
             res.status(208).json({
                 message: "This Product Already Exists",
             })
         }
         else{
          await Product.create({ ProductName, Price, BrandName, CategoryName, Image, Description, Rating })
          const allProducts = await Product.find()
          res.json({
             message: "Product Added Successfully",
                 Product: allProducts
          }) }
          
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

const getProductByName = async (req, res) => {

    const { ProductName } = req.query

    try {
        await connect(process.env.MONGO_URI)
        const product = await Product.findOne( {ProductName} )
        res.json(
            {
                Product: product
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

const getProductByCategory = async (req, res) => {

    const { CategoryName } = req.params

    try {
        await connect(process.env.MONGO_URI)
        const product = await Product.find({ CategoryName })
        res.json(
            {
                Product: product
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

const getProductByBrand = async (req, res) => {

    const { BrandName } = req.params

    try {
        await connect(process.env.MONGO_URI)
        const product = await Product.find({ BrandName })
        res.json(
            {
                Product: product
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

const getProductById = async (req, res) => {
    const { _id } = req.params
    if (!_id) {
        res.status(403).json({ message: "Please Give Product id" })
    }
    else {
        await connect(process.env.MONGO_URI)
        const products = await Product.findOne({ _id })
        res.json({ products })
    }
}
    // try {
    //     await connect(process.env.MONGO_URI);
    //     const product = await Product.findById(_id);

    //     res.json({
    //         Product:product
    //     })
    // }
    // catch (error) {
    //     res.status(500).json({
    //         message: error.message
    //     })
    // }
// }

const getAllProducts = async(req, res) => {
    try {
      
        await connect(process.env.MONGO_URI)
        const allProducts = await Product.find()
        res.json({
               Product: allProducts
        })
  
     } 
     
     catch (error) {
  
        res.status(400).json({
            message : error.message
        })
        
     }
}

const updateProduct = async (req, res) => {
    const { _id , ProductName, Price, BrandName, CategoryName, Image, Description, Rating } = req.body

    const filter = { _id};
    const update = {ProductName, Price, BrandName, CategoryName, Image, Description, Rating };
     try {
       await connect(process.env.MONGO_URI)
       await Product.findOneAndUpdate(filter, update, {
          new: true
        });
 
        const product = await Product.find()
 
        res.json({
          message:"Product Updated Successfully",
          product
        })
       } 
     
     catch (error) {
 
        res.status(400).json({
            message : error.message
        })
        
     }
}

const deleteProductById = async (req, res) => {
    const { _id } = req.query;

    try {
        await connect(process.env.MONGO_URI);
        const deleteProduct = await Product.findByIdAndDelete(_id);
        const product = await Product.find()
        res.json({
            message: 'Product deleted successfully.',
            product
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {getAllProducts, createProducts, getProductByName,
     getProductByCategory, getProductByBrand, getProductById, updateProduct, deleteProductById}
