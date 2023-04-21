import  "./footer.css"
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="location">
        <HomeIcon fontSize="large" sx={{color:"white"}}/>
        <p>13/103 Kerkandy Village, </p>
        <p>Yellanalli Post, The Nilgiris.</p>
        <p>TamilNadu, India -643221.</p>
        </div>

        <div className="phone" >
        <PhoneIcon fontSize="large" sx={{color:"white"}}/>
        <p>+91 78680 68758</p>
        <p>+91 91503 88189</p>
         </div>
       
        <div className="social-media">
        
            <EmailIcon fontSize="large" sx={{color:"white"}}/>
            <GitHubIcon fontSize="large" sx={{color:"white"}}/>
            <InstagramIcon fontSize="large" sx={{color:"white"}}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
