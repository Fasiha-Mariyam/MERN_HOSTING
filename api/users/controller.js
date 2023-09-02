const User = require('./model')
const { connect } = require('mongoose')
require('dotenv').config()
const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

const signup = async (req, res) => {
   const { UserName , Email , Password , Role , ProfileImage} = req.body
   if( !UserName|| !Email|| !Password  )
   {
      res.status(403).json({
         message : "Missing Required Field"
      })
   }
   else{
  try {
      await connect(process.env.MONGO_URI) 
      const userExists = await User.exists({ Email })
      if (userExists) {
          res.status(208).json({
              message: "This User Already Exists",
          })
      }
      else{
        const users = await User.create({ UserName , Email , Role , ProfileImage ,Password: await hash(Password,12)}) 
    //    await User.find()
      res.status(201).json({
         message: "User SignUp Successfully",
             User : users
      }) 
    }
}
   
   catch (error) {
    res.json({
        message : 'Error'
    })
  }
   }
 }

const login = async(req, res) => {
   
    const {Email,Password} = req.body;
    try {
        await connect(process.env.MONGO_URI) 
        const userExistsDB = await User.findOne({ Email })
        if(!userExistsDB){
            res.status(404).json({
                message: "This User Does Not Exists In DataBase",
            })
        }
        else{
            const decryptPass = await compare(Password,userExistsDB.Password)
             
            if(Email == userExistsDB.Email && decryptPass)
            {
                 const token = sign(
                    {
                        UserName : userExistsDB.UserName,
                        id: userExistsDB._id,
                        Email : userExistsDB.Email,
                        Role :userExistsDB.Role,
                        ProfileImage:userExistsDB.ProfileImage
                    },
                    process.env.JWT_SECRET
                 )       

                res.status(200).json({
                    message:"User Successfully Signed In",
                    token : token
                })
            }
            else{
                res.status(404).json({
                    message:"Invalid Password"
                })
            }
        }
    } 
    
    catch (error) {
        res.json({
            message : 'Error'
        })
    }

 }

 const getAllUsers = async (req, res) => {
    try {
        await connect(process.env.MONGO_URI)
        const Users = await User.find()
        res.json(
            {
                User: Users
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

const getUserByEmail = async (req, res) => {

    const { Email } = req.query

    try {
        await connect(process.env.MONGO_URI)
        const Users = await User.findOne({ Email })
        res.json(
            {
                User: Users
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

const updateUserById = async (req, res) => {
    const { _id ,UserName , Email , Password , Role , ProfileImage} = req.body

    const filter = { _id};
    const update = { UserName , Email , Password , Role , ProfileImage }
     try {
       await connect(process.env.MONGO_URI)
       const user = await User.findOneAndUpdate(filter, update, {
          new: true
        })
 
        res.json({
          message:"User Updated Successfully",
          User:user
        })
       } 
     catch (error) {
        res.status(400).json({
            message : error.message
        }) 
     }
}
const deleteUserById = async (req, res) => {
    const { _id } = req.query;

    try {
        await connect(process.env.MONGO_URI);
        const deleteUser = await User.findByIdAndDelete(_id);
        res.json({
            message: 'User deleted successfully.',
            deleteUser
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

 module.exports = {signup,login,getAllUsers,getUserByEmail,updateUserById,deleteUserById}