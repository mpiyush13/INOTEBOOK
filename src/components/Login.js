import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const [credential,setCredential]=useState({email:"",password:""})
    const navigate = useNavigate();
    const onChange=(e)=>{
        setCredential({...credential,[e.target.name]:e.target.value})
     }
    const handlesubmit= async(e)=>{
        e.preventDefault()
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
             
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({email:credential.email,password:credential.password}), // body data type must match "Content-Type" header
          });
          const json= await response.json()
          if(json.success)
          {
            localStorage.setItem('token',json.authtoken)
            navigate("/")
            props.showAlert("Logged in successfully","success")

          }else
          {
            props.showAlert("invalid credentials","danger")
          }
          console.log(json)

    }
  return (
    <>
     <form onSubmit={handlesubmit}>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={credential.email} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email"/>
     
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password"name="password" class="form-control" value={credential.password} onChange={onChange} id="exampleInputPassword1" placeholder="Password"/>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </>
   
  )
}
