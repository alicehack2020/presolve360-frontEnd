import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBarAfterLogin = () => {
  return (
    <div className='NavBarmain'>
     <Link className='link'to="/admin"><Button variant="outlined">DashBoard</Button></Link>
     <Link className='link'to="/graph"><Button variant="outlined">Graph</Button></Link>
     <Link className='link'to="/"><Button variant="outlined">Logout</Button></Link>
 </div>
  )
}

export default NavBarAfterLogin