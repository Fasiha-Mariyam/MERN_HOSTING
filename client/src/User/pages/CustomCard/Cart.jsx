import React, { useContext } from 'react'
import './custom.css'
import { CartContext } from '../../CartContext/context'
import { GlobalContext } from '../../../Context/context'
import { decodeToken } from 'react-jwt'
import axios from 'axios'
// import { Link } from 'react-router-dom';

export default function CustomCart() {

    const { cart_state, cart_dispatch } = useContext(CartContext)
    const { state, dispatch } = useContext(GlobalContext)
    const total = cart_state.cart.reduce((accumulator, Products) => accumulator + (Products.Price * Products.productQuantity), 0)
    const currentUser = decodeToken(state.token)


    const placeOrder = () => {
        const payload = {
            customerName: currentUser.username,
            customerId: currentUser._id,
            customerEmail: currentUser.email,
            customerAddress: "Hello Street#123",
            customerContact: "+923040257471",
            order: cart_state.cart
        }


        axios.post('http://localhost:1789/api/place-order', payload)
            .then((json) => console.log(json.data))
            .catch(err => console.log(err.message))
    }


    return (

        <div className='p-5' >
            <div className="container" style={{ height: '100vh', width: '30%' }} >
                <div className="master-container">
                    <div className="card cart " style={{  width: '400px' }}>
                        <label className="title fw-bold"> Cart Items</label>
                        <div className="products">
                            {
                                cart_state.cart.map((val, key) => <div key={key} className="product">
 <div>
                                        <img src={val.Image} alt="" style={{ height: '10vh', objectFit: 'contain' }} />
                                    </div>
                                    <div>
                                        <span>{val.ProductName}</span>
                                        <p>{val.CategoryName}</p>
                                        <p>{val.BrandName}</p>
                                    </div>
                                    <div className="quantity">

                                        <label>{val.productQuantity}</label>

                                    </div>
                                    <label className="price small">{val.Price}</label>
                                </div>)
                            }
                            <div>
                    <label className="ps-1 fs-5 fw-bold text-decoration-underline">Total:</label> {total}
                    {/* <Link className=' btn btn-info fw-bold d-block w-100' to='/details' style={{  background:"rgb(185, 179, 179)"}}>CheckOut</Link> */}
                            </div>
                        </div>
                    </div>

                    <div className=" mt-5" >
                <button className=" d-block w-100 btn btn-info mb-5 "style={{  background:"linear-gradient(45deg,#0dcaf0,rgb(185, 179, 179))"}} onClick={placeOrder}>Place Order</button>
            </div>
                </div>

            </div>
        </div>
    )
}
