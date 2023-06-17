import React from "react";
import NoImg from "../image/noimage.png";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Pro = () => {
  return (
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
  );
};

export default Pro;
