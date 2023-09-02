import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Signup() {

  const submit = () => {
   
    Swal.fire({
      title: 'Succesfully SignUp',
      text: 'ThankYou For Connecting With Us',
      icon: 'success',
      confirmButtonText: 'Done!'
    })  
  
  }



  return (
    <>
    <div className="login template d-flex justify-content-center align-items-center p-5 vh-60 bg-primary">
      <div className='form_container p-5 rounded bg-white'>
      <form>
      <div className="h1 text-center text-primary mb-3">SignUp</div>
      <div className="mb-3">
      <input type="text"  className="form-control" placeholder="First Name" />
    </div>
    <div className="mb-3">
      <input type="text"  className="form-control" placeholder="Last Name" />
    </div>
    <div className="mb-3">
      <input type="email"  className="form-control" placeholder="Email" />
    </div>
    <div className="mb-3">
      <input type="password"  className="form-control" placeholder="Password" />
    </div>
    <div className="mb-3">
      <input type="password"  className="form-control" placeholder="Confirm Password" />
    </div>
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        I Agree To The Terms and Conditions
      </label><br />
      <button className='mt-3 btn btn-primary' onClick={submit}>Register</button>
      <div className='mt-3 d-flex text-primary'>
        Already Have An Account? 
        <div className=" fw-bold text-primary"><Link style={{textDecoration: 'none', marginLeft:5 , color:'primary'}} to={"/login"}>Login</Link></div>
    </div>
      </form> 
        </div>
        </div>
        </>

  )
}

