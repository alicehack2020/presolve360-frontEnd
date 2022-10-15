import React, { useState } from 'react'
import NavBarLogin from '../navbar/NavBarlogin'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Registration.css"
import { useNavigate } from 'react-router-dom'; 
import {url} from "../../../config/url.js"
const Login = () => {

   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const navigate=useNavigate()
  
   
  const saveData=()=>{

    const data={
      email:email,
      password:password
    }


// POST request using fetch()
fetch(url+"api/user/login", {
	method: "POST",
	body: JSON.stringify(data),
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})
.then(response => response.json())
.then(json =>handdleError(json));
 
}



const handdleError=(json)=>{
  var status=json.status
    if(status==="failed")
    {
      alert(json.message)
       
    }
    else
    {
      

      localStorage.setItem("user",JSON.stringify(json.data))
      navigate("/admin")
       
    }
}

 
  
 
  return (
    <div>
      <NavBarLogin/>

      <div className="main">
        <div className='register_form'>
            <TextField className='TextField' label="Enter your email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} sx={{marginTop:"30px"}}/>
            <TextField className='TextField' label="Enter your password" variant="outlined"  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} sx={{marginTop:"30px",marginBottom:"30px"}}/>
            <Button className="Button" variant="contained" onClick={saveData} sx={{width:"20rem"}}>Login</Button>       
        </div>
      </div>

     
    </div>
  )
}

export default Login