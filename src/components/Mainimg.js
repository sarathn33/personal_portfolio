import "./mainimg.css";
import React from 'react'
import { Link } from "react-router-dom";
import Introimg from "../image/devpic1.jpg"
import Button from '@mui/material/Button';


const Mainimg = () => {
   
  return (
    <div className="main-img">
      <div className="mask">
        <img className="intro-img" src={Introimg} loading="lazy" alt="Intro"/>
      </div>
      <div className="content">
        <h1 className="head" >Hello There, I am Sarath!</h1>
        <p className="text">I'm a Front-End Web Developer.</p>
        <div className="linkbutton">
            <Link to="/about"><Button className="btn" sx={{bgcolor:"purple"}} variant="contained">ABOUT</Button></Link>
            <Link to="/contact"> <Button className="btn" sx={{bgcolor:"purple}"}} variant="contained">CONTACT</Button></Link>
        </div>
        
       
      </div>
    </div>
  )
}

export default Mainimg
