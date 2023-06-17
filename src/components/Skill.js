import React from 'react'
import SkillImg from "../image/skill.jpg"

const Skill = () => {
  return (
    <div className='main-img'>
      <div className='mask'>
        <img className='project-img' src={SkillImg} loading='lazy' alt="Skills Background"/>
      </div>
      <div className='content'>
        <h1 className='head'>Skills</h1>
        <p className='text'>A Full Stack Web Developer specialized in
        <ul className='lists'>
          <li>HTML </li><progress className='progress' id="file" value="80" max="100"/>80%
          <li>CSS </li><progress className='progress'  id="file" value="75" max="100"/>75%
          <li>Bootstrap </li><progress className='progress'  id="file" value="80" max="100"/>75%
          <li>JavaScript </li><progress className='progress'  id="file" value="65" max="100"/>65%
          <li>ReactJs</li> <progress className='progress'  id="file" value="70" max="100"/>70%
          <li>NodeJs </li><progress className='progress'  id="file" value="60" max="100"/>60%
          <li>MongoDB </li><progress className='progress'  id="file" value="65" max="100"/>65%
          <li>ExpressJs</li> <progress className='progress'  id="file" value="65" max="100"/>65%
          <li>GitHub</li> <progress className='progress'  id="file" value="70" max="100"/>70%
        </ul></p>
      </div>
    </div>
  )
}

export default Skill
