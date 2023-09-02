import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CategoryModal from '../components/CategoryModal'
import {AiFillDelete} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'
import Spinner from 'react-bootstrap/Spinner';

export default function Category() {

  const [category, setCategory] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
      axios.get('/api/get-all-category')
          .then((json) => 
          {setCategory(json.data.Category)
            setLoader(false)}
          )
          .catch((err) => console.log(err))

  }, [])

const deleteCategory = (id) =>{
const payload ={
  _id : id
}

const config =
{
  method:'delete',
  url:'/api/delete-category',
  data: payload
}

axios(config)
.then(json=>setCategory(json.data.category))
.catch(err=>alert(err.message))
}



  return (

    loader ? (<div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}><Spinner animation="grow" /></div>
    ) :
    <div className="container">
    <div className="d-flex justify-content-between align-items-center bg-dark p-2 my-3 rounded">
        <span className='fs-4 fw-bold text-white'>Categories</span>
        <CategoryModal   recallData={setCategory}/>
    </div>

<div className="container">
<table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Category Name</th>
      <th scope="col">Category Image</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    {
      category?.map((val,key)=>
      <tr key={key}>
      <th  scope="row" >{val._id}</th>
      <td >{val.CategoryName}</td>
      <td ><img width={100} height={50} src={val.CategoryImage} alt="" /></td>
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
