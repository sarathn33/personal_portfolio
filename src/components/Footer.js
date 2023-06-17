import  "./footer.css"
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="location">
        <HomeIcon fontSize="large" sx={{color:"white"}}/>
        <p>20/37 Hallatanai Village , </p>
        <p>Manjacombai Post, The Nilgiris.</p>
        <p>TamilNadu, India - 643 221.</p>
        </div>

        <div className="phone" >
        <PhoneIcon fontSize="large" sx={{color:"white"}}/>
        <p>+91 78680 68758</p>
        <p>+91 91503 88189</p>
         </div>
       
        <div className="social-media">
        
            <a href="https://github.com/sarathn33" target="blank"><GitHubIcon fontSize="large" sx={{color:"white"}}/></a>
            <a href="https://www.instagram.com/srh.29o6/" target="blank"><InstagramIcon fontSize="large" sx={{color:"white"}}/></a>
            <a href="https://www.linkedin.com/in/sarath-n-021117227/" target="blank"><LinkedInIcon fontSize="large" sx={{color:"white"}}/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
