import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link, json } from 'react-router-dom';

export default function CategoriesSection() {

const [categories,setCategories] = useState([])

useEffect(()=>{

axios.get('/api/get-all-category')
.then(
  json=> 
    setCategories(json.data.Category)
  
  )
},[])


  return (
    <>
  
    <div className='container'>
      <div className="my-5">
        <h1 className='text-center'>Catogeries</h1>
        <p className='text-secondary'><h6 className='text-black fw-bold'>Trend Bazaar</h6>
        offers an extensive collection of products and services to cater to your
         various needs and interests. Browse through our carefully curated categories 
         below and discover a world of possibilities. Whether you're looking for the latest technology, 
         trendy fashion, home essentials, or unique gifts, we have something for everyone..</p>
      </div>
    </div>
<div className="row container mx-5 mb-5">
  {
  categories.map((value,key) => 
  <div className="col-md-12 my-3 m-5 ">
  <Link className='text-decoration-none' to={`/categories/${value.CategoryName}`}>
  <Card>
      <Card.Body>
        <Card.Title>{key+1}-{value.CategoryName.toUpperCase()}</Card.Title>
      </Card.Body>
    </Card>
  </Link>
  </div>)
}
</div>


    </>
  )
}
