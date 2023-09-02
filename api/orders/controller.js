const nodemailer = require("nodemailer");
require('dotenv').config()
var Mailgen = require('mailgen');
const { connect } = require("mongoose");
const Order = require('./model')


const addOrders = async (req, res) => {

    const  { customerName, customerEmail, customerId, customerContact, customerAddress, order } = req.body
    
    if ( !customerName || !customerEmail || !customerId || !customerContact || !customerAddress || !order ) 
    {
        res.status(403).json({ message: "Invalid payload" })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            const order = await Order.create({ customerName, customerEmail, customerId, customerContact, customerAddress, order } )

            //EMAIL 
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                    user: process.env.NODEMAILER_EMAIL,
                    pass: process.env.NODEMAILER_PASSWORD
                }
            });

            //MAIL GEN SETUP

            var mailGenerator = new Mailgen({
                theme: 'default',
                product: {
                    // Appears in header & footer of e-mails
                    name: 'TrendBazaar',
                    link: 'https://mailgen.js/'
                }
            });

            await transporter.sendMail({
                from: process.env.NODEMAILER_EMAIL, // sender address
                to: customerEmail, // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: mailGenerator.generate({
                    body: {
                        name: customerName,
                        intro: 'Welcome to TrendBazaar! We\'re very excited to deliver you.',
                        table: {
                            data: [
                                {
                                    name: customerName,
                                    email: customerEmail,
                                    TrackingId: order._id,
                                    Address: customerAddress,
                                    Contact: customerContact
                                }
                            ]
                        },
                        outro: 'Please make sure the above mentioned details are correcrt , incase any mistake , you can contact us.'
                    }
                }), // html body
            });

            res.status(201).json({
                message: "Order Place Successfully",
                TrackingId: order._id
            })
        }

        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

const allorders = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const orders = await Order.find()
        res.json({ orders })
    }

    catch (error) {
        res.status(500).message({ message: error.message })

    }
}

const orderbyId = async (req, res) => {
    const { _id } = req.params

    try {
        await connect(process.env.MONGO_URI)
        const order = await Order.findOne({ _id })
        res.json({ order })
    }

    catch (error) {
        res.status(500).message({ message: error.message })

    }
}

module.exports = { addOrders, orderbyId, allorders }