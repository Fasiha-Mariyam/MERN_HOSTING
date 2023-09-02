const Brands = require('./model')
const { connect } = require('mongoose')
require('dotenv').config()


const getAllBrand = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const brands = await Brands.find()
        res.json(
            {
                brands
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

const AddBrands = async (req, res) => {

    const { BrandName, BrandImage } = req.body;
    if(!BrandName || ! BrandImage )
    {
       res.status(403).json({
          message : "Missing Required Field"
       })
    }
    else 
    {
       try {
          await connect(process.env.MONGO_URI)
          const BrandExists = await Brands.exists({  BrandName })
         if (BrandExists) {
             res.status(208).json({
                 message: "This Brand Already Exists",
             })
         }
         else{
          await Brands.create({ BrandName, BrandImage })
          const allBrands = await Brands.find()
          res.json({
             message: "Brand Added Successfully",
                 Brands: allBrands         
                })
 
         }
          
        } 
       
        catch (error) 
       {
   
          res.status(400).json
          ({
              message : error.message
          })}
          
       }
   
    }

const deleteBrand = async (req, res) => {
    try {
        const { _id } = req.body
      await connect(process.env.MONGO_URI)
      await Brands.findOneAndDelete({ _id })
      const brand = await Brands.find()
      res.status(200).json({ 
         message :"Deleted Succesfully"
         ,brand})
    } 
    catch (error) {
        res.status(400).json({
            message : error.message
        }) 
    }
}

const updateBrandById = async (req, res) => {
    const {_id,BrandName,BrandImage} = req.body
    const filter = { _id};
    const update = {BrandName,BrandImage};
    try {
        await connect(process.env.MONGO_URI)
        await Brands.findByIdAndUpdate(filter, update, {
           new: true
         });
  
         const brands = await Brands.find()
            res.json({
                message: "Brand Updated Successfully.",
                brands
            })
         
    } 
    catch (error) {
        res.json({
            message: error.message,
        });
    }
}

const BrandById = async (req, res) => {
    const { _id } = req.body

    try {
        await connect(process.env.MONGO_URI)
        const brand = await Brands.findById(_id)

        if (!brand) {
            return res.status(404).json({
                message: 'Brand not found'
            })
        }
       else{
        res.json({
            brand: brand  })
        }
      
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {getAllBrand , AddBrands , BrandById, updateBrandById, deleteBrand}