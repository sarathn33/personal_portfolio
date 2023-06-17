import "./mainimg2.css";
import React from 'react'
import ProjectImg from "../image/project.jpg"
import NoImg from "../image/noimage.png";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Mainimg2 = () => {
  return (
    <div className="main-img">
        <div className="mask">
            <img className="project-img" src={ProjectImg} loading="lazy" alt="Project"/>
        </div>
      <div className="content">
        <h1 className="head">Projects</h1>
        <p className="text">Some of my recent Works</p>

        
        <div className="project-box" >
      <div className="project-container">

        <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={NoImg}  />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Still on Process
            </Typography>
            <Button variant="contained">source</Button>
            <Button variant="contained">deployed</Button>
          </CardContent>
        </Card>
        </div>


        <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={NoImg} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Still on Process
            </Typography>
            <Button variant="contained">source</Button>
            <Button variant="contained">deployed</Button>
          </CardContent>
        </Card>
        </div>


        <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={NoImg} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Still on Process
            </Typography>
            <Button variant="contained">source</Button>
            <Button variant="contained">deployed</Button>
          </CardContent>
        </Card>
        </div>


        <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={NoImg} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Still on Process
            </Typography>
            <Button variant="contained">source</Button>
            <Button variant="contained">deployed</Button>
          </CardContent>
        </Card>
        </div>


        <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={NoImg} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Still on Process
            </Typography>
            <Button variant="contained">source</Button>
            <Button variant="contained">deployed</Button>
          </CardContent>
        </Card>
        </div>
       

       
      </div>
    </div>
       
      </div>
    </div>
  )
}

export default Mainimg2
