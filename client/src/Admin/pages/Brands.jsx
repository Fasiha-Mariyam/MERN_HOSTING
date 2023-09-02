import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BrandsModal from '../components/BrandsModal'
import {AiFillDelete} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'
import Spinner from 'react-bootstrap/Spinner';
import { AppRoute } from '../../App'

export default function Brands() {

  const [Brand, setBrand] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
      axios.get(`${AppRoute}api/get-all-brands`)
          .then((json) => 
          {setBrand(json.data.brands)
            setLoader(false)}
          )
          .catch((err) => console.log(err))

  }, [])

  const deleteBrand = (id) =>{
    const payload ={
      _id : id
    }
    
    const config =
    {
      method:'delete',
      url:'/api/delete-brand',
      data: payload
    }
    
    axios(config)
    .then(json=>setBrand(json.data.brand))
    .catch(err=>alert(err.message))
    }
    

  return (

    loader ? (<div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}><Spinner animation="grow" /></div>
    ) :
    <div className="container">
    <div className="d-flex justify-content-between align-items-center bg-dark p-2 my-3 rounded">
        <span className='fs-4 fw-bold text-white'>Brands</span>
        <BrandsModal  recallData={setBrand}/>
    </div>

<div className="container">
<table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Brand Name</th>
      <th scope="col">Brand Image</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    {
      Brand?.map((val,key)=>
      <tr key={key}>
      <th  scope="row" >{val._id}</th>
      <td >{val.BrandName}</td>
      <td ><img width={100} height={50} src={val.BrandImage} alt="" /></td>
      <td ><button className='btn btn-info'><AiFillEdit /></button>
      <button className='mx-2 btn btn-info' onClick={()=>deleteBrand(val._id)}><AiFillDelete/></button></td>
    </tr>
    )
    }
    
  </tbody>
</table>

</div>

    </div>
  )
}
