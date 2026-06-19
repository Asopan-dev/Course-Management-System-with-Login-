import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
function Register(){

  const [registerData,setRegisterData]=useState(
    {
    email:"",
    password:""
    }
  );
  const navigate = useNavigate();
  const handlechange=(e)=>{
    setRegisterData({...registerData,[e.target.name]:e.target.value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const formData={
      email:registerData.email,
      password:registerData.password
    }
    axios.post("http://localhost:8080/register",formData)
    .then(()=>{
      Swal.fire("Success","Registration is Compoleted","success");
      navigate("/")
    })
    .catch((error)=>{
      Swal.fire("Error","Registration is failed","error")
    })
  }

  return (
    <> 
    <h1>Register</h1>
       <form onSubmit={handleSubmit}>
         <label htmlFor="">Email</label>
         <input
           type="email"
           name="email"
           value={registerData.email}
           onChange={handlechange}
         />
         <br />
         <label htmlFor="">Password</label>
         <input
           type="password"
           name="password"
           value={registerData.password}
           onChange={handlechange}
         />
         <br />
         <button type="submit">Register Here</button>
       </form>
       <p>you have account</p>
       <Link to="/">Login Here</Link>

    </>
  )
}

export default Register