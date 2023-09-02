import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductModal from '../components/ProductModal'
import {AiFillDelete} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'
import Spinner from 'react-bootstrap/Spinner';


export default function Products() {

  const [Product, setProduct] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
      axios.get('/api/get-all-products')
          .then((json) => 
         
          { setProduct(json.data.Product)
            setLoader(false)}
          )
          .catch((err) => console.log(err))

  }, [])

  return (

    loader ? (<div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}><Spinner animation="grow" /></div>
    ) :
    <div className="container">
    <div className="d-flex justify-content-between align-items-center bg-dark p-2 my-3 rounded">
        <span className='fs-4 fw-bold text-white'>Products</span>
        < ProductModal  recallData={setProduct}/>
    </div>

<div className="container">
<table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">ProductName</th>
      <th scope="col">Price</th>
      <th scope="col">BrandName</th>
      <th scope="col">CategoryName</th>
      <th scope="col">Description</th>
      <th scope="col">Rating</th>
      <th scope="col">Image</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody class="table-group-divider">
    {
      Product.map((val,key)=>
      <tr key={key}>
      <th  scope="row" >{val._id}</th>
      <th >{val.ProductName}</th>
      <th >{val.Price}</th>
      <th >{val.BrandName}</th>
      <td >{val.ProductName}</td>
      <th >{value?.Description?.length > 40 ? (value?.Description?.substring(0,40)+"...."):(value?.Description)}</th>
      <th >{val.Rating}</th>
      <td ><img width={100} height={100} src={val.Image} alt="" /></td>
      <td ><button className='btn btn-info'><AiFillEdit /></button>
      <button className='mx-2 btn btn-info' onClick={()=>deleteCategory(val._id)}><AiFillDelete/></button></td>
    </tr>
    )
    }
    
  </tbody>
</table>

</div>

    </div>
  )
}
