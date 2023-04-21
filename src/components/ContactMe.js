import { Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import ContactBg from "../image/contact.jpg"
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_fewaarc',
            'template_icnpsm1',
            form.current, 
            '9nOk9d0ZQXnLxHaYk')
          .then((result) => {
              console.log(result.text);
              setDone(true);
              form.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='main-img'>
      <div className='mask'>
        <img className='project-img' src={ContactBg} alt="Contact Background"/>
      </div>
      <div className='content'>
        <h1 className='head'>Contact Me</h1>
        <form className='form' ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name='from_name'></input>
            <label>Email</label>
            <input type="email" name='from_email'></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message here' name='message'></textarea>
            <Button type='submit' className="btn" sx={{bgcolor:"purple"}} variant="contained" >Submit</Button>
            <span>{done && "Thanks for Contacting me"}</span>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
