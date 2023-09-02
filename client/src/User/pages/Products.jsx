import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link, json } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export default function Products() {

  const [products,setProducts] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(()=>{

    axios.get('/api/get-all-products')
    .then(
      json=> 
       { setProducts(json.data.Product)
        setLoader(false)
       }
      )
    },[])
    

  return (
    <>
     {
            loader ? (<div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}><Spinner animation="grow" /></div>
            ) :
    <div className='container'>
    <div className="my-5">
      <h1 className='text-center' >Products</h1>
      <p className='text-secondary'>Welcome to our All Products Page! Here, you'll find a wide range of high-quality products to meet your needs. From cutting-edge electronics to stylish fashion items, we have it all. Browse through our extensive selection and discover the perfect items for yourself or your loved ones. We take pride in offering a wide range of items that encompass various categories, ensuring there's something for everyone.</p>
    </div>
    <div>
    <hr /> <h1 className='text-center text-decoration-underline bg-dark text-white'>Items</h1><hr />
    <div  className="row container">
    {
  products.map((value,key) => 
  <div className="col-md-4 my-4" key={key}>
<Link className='text-decoration-none' to={`/products/${value._id}`}>
    <Card>
     <Card.Img variant="top" height={300} src={value.Image} />
     <Card.Body>
       <Card.Title>{value.ProductName} - price:{value.Price}</Card.Title>
       <Card.Text >
         {
         value?.Description?.length > 40 ? (value?.Description?.substring(0,40)+"...."):(value?.Description)
         }
       </Card.Text>
     </Card.Body>
    </Card>
</Link>
  </div>)
}
    </div>
    </div>
  </div>
 
     }
  </>
  )
}
