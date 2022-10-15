import React, { useState } from 'react'
import NavBarLogin from '../navbar/NavBarlogin'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';


import "./Registration.css"
import { useNavigate } from 'react-router-dom';
import {url} from "../../../config/url.js"

const Register = () => {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [passwordConfirmation,setPasswordConfirmation]=useState("")
  const navigate=useNavigate()

  const saveData=()=>{

    const data={
      name:name,
      email:email,
      password:password,
      password_confirmation:passwordConfirmation
    }


// POST request using fetch()
fetch(url+"api/user/register", {
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
      alert(json.message) 
      navigate("/login")
    }
}
 
  return (
    <div>
      <NavBarLogin/>

      <div className="main">
        <div className='register_form'>
            <TextField className='TextField' label="Enter your name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)} sx={{marginTop:"60px"}}/>
            <TextField className='TextField' label="Enter your email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} sx={{marginTop:"30px"}}/>
            <TextField className='TextField' label="Enter your password" variant="outlined"  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} sx={{marginTop:"30px"}}/>
            <TextField className='TextField' label="Enter your confirm Password" variant="outlined"  type="password" value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} sx={{marginTop:"30px",marginBottom:"30px"}}/>
         
          


      <Button className="Button" variant="contained" onClick={saveData} sx={{width:"20rem"}}>Register</Button>       
        </div>
      </div>

     
    </div>
  )
}

export default Register