import axios from 'axios';
import React, { useState , useContext } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { GlobalContext } from '../../Context/context';
import Cookies from 'js-cookie'

export default function Login() {
    const LinkStyle ={textDecoration:'none' , marginLeft:'100px' , color:'white'};

    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("")
   
    const { state, dispatch } = useContext(GlobalContext)
   
    const loginUser = (e) =>{
     
        e.preventDefault();
        const payload = {Email,Password}
   
       setEmail(''),setPassword('')
   
        axios.post('/api/login',payload)
        .then((json)=>{
         Cookies.set('token', json.data.token)
             dispatch({
   
           type : "USER_LOGIN",
           token: json.data.token
   
        })
       })
        .catch(err=>console.log(err))
   
        Swal.fire({
         title: 'Succesfully Login',
         text: 'ThankYou For Connecting With Us',
         icon: 'success',
         confirmButtonText: 'Done!'
       }) 
    }
   
     return (
       <div className="login template d-flex justify-content-center align-items-center p-5 bg-light">
         <div className='form_container p-5 rounded bg-black'>
       <form onSubmit={loginUser}>
       <div className="h1 text-center text-info">Login</div>
       <div className="mb-3">
         <label htmlFor="exampleInputEmail1" className="form-label text-white">
           Email address
         </label>
         <input
           type="email"
           className="form-control"
           id="exampleInputEmail1"
           aria-describedby="emailHelp"
           value={Email}
           onChange={(e)=>setEmail(e.target.value)}
         />
         <div id="emailHelp" className="form-text text-white">
           We'll never share your email with anyone else.
         </div>
       </div>
       <div className="mb-3">
         <label htmlFor="exampleInputPassword1" className="form-label text-white">
           Password
         </label>
         <input
           type="password"
           className="form-control"
           id="exampleInputPassword1"
           value={Password}
           onChange={(e)=>setPassword(e.target.value)}
         />
       </div>
              <button className="btn btn-info fw-bold " >
         Login
       </button>
       <div className='mt-3 d-flex text-info'>
           Not a member? 
           <div className=" fw-bold text-black"><Link style={{textDecoration: 'none', marginLeft:5 , color:'white'}} to={"/signup"}>SignUp</Link></div>
       </div>
     </form>
     </div>
     </div>
     )
   }