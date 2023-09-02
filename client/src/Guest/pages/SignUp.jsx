import axios from 'axios'
import React, { useState } from 'react'
import { Link, json } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function Signup() {

       const [Email,setEmail] = useState("")
       const [Password,setPassword] = useState("")
       const [UserName,setUserName] = useState("")

 
  const SignUpUser = (e) => {
    e.preventDefault();
    const payload = {Email,Password,UserName}
    setEmail(''),setPassword(''),setUserName('')

    axios.post('/api/signup',payload)
    .then(json=>(console.log(json.data)))
    .catch(err=>console.log(err))

    Swal.fire({
      title: 'Succesfully SignUp',
      text: 'ThankYou For Connecting With Us',
      icon: 'success',
      confirmButtonText: 'Done!'
    })  
  
  }

  return (
    <>
    <div className="login template d-flex justify-content-center align-items-center p-5 vh-60 ">
      <div className='form_container p-5 rounded bg-dark'>
      <form  onSubmit={SignUpUser}>
      <div className="h1 text-center text-info mb-3">SignUp</div>
      <div className="mb-3">
      <input type="text"  className="form-control" placeholder="UserName" value={UserName}
           onChange={(e)=>setUserName(e.target.value)}/>
    </div>
    <div className="mb-3">
      <input type="email"  className="form-control" placeholder="Email" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="mb-3">
      <input type="password"  className="form-control" placeholder="Password" value={Password}
           onChange={(e)=>setPassword(e.target.value)} />
    </div>
      <button className='mt-3 btn btn-info' >Register</button>
      <div className='mt-3 d-flex text-info'>
        Already Have An Account? 
        <div className=" fw-bold"><Link style={{textDecoration: 'none', marginLeft:5 , color:'white'}} to={"/login"}>Login</Link></div>
    </div>
      </form> 
        </div>
        </div>
        </>

  )
}

