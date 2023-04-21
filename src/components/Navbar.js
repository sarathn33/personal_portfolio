import "./Navbar.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';  


const Navbar = () => {
const [click,setClick]=useState(false)
const handleClick = () =>setClick(!click)


  return (
    <div className="header">
      
      <ul className={click ? "nav-menu active":"nav-menu"}>
        <li>
        <Link to="/">Home</Link>
        </li>

        <li>
        <Link to="/about">About</Link>
        </li>

        <li>
        <Link to="/skills">Skills</Link>
        </li>

        <li>
        <Link to="/projects">Projects</Link>
        </li>

        <li>
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click?(
       <CloseIcon fontSize="large" sx={{color:"white"}}/> )
       :(<MenuIcon fontSize="large" sx={{color:"white"}} />)
       }
      </div>
    </div>
  )
}

export default Navbar
