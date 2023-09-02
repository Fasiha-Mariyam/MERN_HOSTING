import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {AiFillCopyrightCircle} from 'react-icons/ai'


export default function FooterSection() {
  return (
    <div className='container-fluid bg-dark text-white p-5 mt-5' >
      <div className='text-center h1 text-info'> TrendBazaar</div>
    <br />
      <div className="Brand d-flex justify-content-space-around">
        <img src="https://tse4.mm.bing.net/th?id=OIP.YMgL5O3ts2czCUCeoyZHbwAAAA&pid=Api&P=0&h=220" alt="" />
        <div className='mx-5'><h3>Menu </h3><hr />
        <ul>
          <Link to={'/products'} className='text-decoration-none text-white'><li style={{marginLeft:'-30%',listStyle:'none'}}>Products</li></Link>
          <Link to={'/brands'} className='text-decoration-none text-white'><li style={{marginLeft:'-30%',listStyle:'none'}}>Brands</li></Link>
          <Link to={'/categories'} className='text-decoration-none text-white'><li style={{marginLeft:'-30%',listStyle:'none'}}>Categories</li></Link>
        </ul>
          </div>
        <div className='h3 mx-5'>Follow Us <hr />
        <BsInstagram/>  <GrFacebook/> <BsLinkedin/> <BsTwitter/> </div>
        <div className='h3 mx-5'>Contact Us <hr />+92 4236 10881</div>
      </div>
      <hr />
      <div className='small d-flex justify-content-center'>
        <AiFillCopyrightCircle/>2023TrendBazaar,Ecommerce Website,All Rights Reserved.
      </div>
      </div>
         
    



    )
}

