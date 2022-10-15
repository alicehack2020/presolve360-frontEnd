import React, { useEffect, useState } from 'react'
import NavBarAfterLogin from '../navbar/NavBarAfterLogin'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {url} from "../../../config/url.js"
 

import "./Admin.css"

const Admin = () => {
  const [taskName,setTaskName]=useState("")
  const [description,setDescription]=useState("")
  const [developer,setDeveloper]=useState("")
  const [taskDate,setTaskDate]=useState("")
  const [userList,setUserList]=useState([])

  const [taskList,setTaskList]=useState([])



  useEffect(()=>{
    fetch(url+"api/user/userList")
    .then(res=>res.json())
    .then(data=>setUserList(data.data))
  },[])

  useEffect(()=>{
    fetch(url+"api/user/getAllTask")
    .then(res=>res.json())
    .then(data=>setTaskList(data.data))
  },[])



  const saveData=()=>
  {
  
    const data={
      task_name:taskName,
      Description:description,
      developer:developer,
      task_Date:taskDate,
      status:"not completed"
    }


// POST request using fetch()
fetch(url+"api/user/addTask", {
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
        alert(json.message);
      
        // call all task api

    }
}


 //select user
  const handleChange = (event) =>
  {
    setDeveloper(event.target.value);
  };


 
  return (
    <div >
      <NavBarAfterLogin/>

      <div className='admin_main'>
        {/* add task  */}
      <div className='taskform'>
          <TextField className='TextField' label="Enter task name" variant="outlined" value={taskName} onChange={(e)=>setTaskName(e.target.value)} sx={{marginTop:"60px"}}/> 
          <TextField className='TextField' label="Enter task description" variant="outlined" value={description} onChange={(e)=>setDescription(e.target.value)} sx={{marginTop:"20px"}}/> 
           
           <Box sx={{ maxWidth: 350,width:"20rem",marginTop:"20px" }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Please Select developer</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={developer}
                label="Role"
                onChange={handleChange}>
                {
                  userList.map((e)=>{
                    return (
                      <MenuItem value={e.name}>{e.name}</MenuItem>
                    )
                  })
                }
                </Select>
            </FormControl>
        </Box>
          
            <input className="dateSelector" type="date" onChange={e=>setTaskDate(e.target.value)}></input>
          <Button className="Button" variant="contained" onClick={saveData} sx={{width:"20rem",marginTop:"20px"}}>sumit</Button>       

      </div>
      
      <div >
         <h1>Task list</h1>
          <div className='list_view'>
            {
              taskList.map((e)=>{
                return(<div className="sub_card">
                    <p>Task name:{e.task_name}</p>   
                    <p>Task description:{e.Description}</p>   
                    <p>Task date:{e.task_Date}</p> 
                    <Button variant="contained" sx={{marginTop:"20px"}}>{e.status}</Button>  
                </div>)
              })
            }
          </div>      
      </div>
      </div>
      



    </div>
  )
}

export default Admin