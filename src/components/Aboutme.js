
import { Button } from '@mui/material'
import React from 'react'
import AboutBg from "../image/about.jpg"
import Resume from "./Sarath_Resume.pdf"

const Aboutme = () => {
  return (
    <div className="main-img">
   <div className="mask">
    <img className="project-img" src={AboutBg} alt="About Background"/>
   </div>
   <div className="content">
    <h1 className='head'>About Me</h1>
    <p className='text'> I'm a well-qualified Full Stack Developer 
        familiar with a wide range of programming
        utilities and languages.
        Knowledgeable of Front-end and Back-end development
        requirements with database management.
        handles any part of the process with ease.
        Collaborative team player with a willingness 
        to learn and grow with the organization.</p>
        <div className='resume'>
        <a href={Resume} download>
        <Button variant="contained" color="success">Download CV</Button>
        </a>
        </div>
   </div>
  
  
    </div>
  )
}

export default Aboutme
