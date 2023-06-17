import "./mainimg2.css";
import React from 'react'
import ProjectImg from "../image/project.jpg"

const Mainimg2 = () => {
  return (
    <div className="main-img">
        <div className="mask">
            <img className="project-img" src={ProjectImg} loading="lazy" alt="Project"/>
        </div>
      <div className="content">
        <h1 className="head">Projects</h1>
        <p className="text">Some of my recent Works</p>
       
      </div>
    </div>
  )
}

export default Mainimg2
