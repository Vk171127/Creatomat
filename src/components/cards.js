import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import card1 from '../assets/card1.mp4';
import card2 from '../assets/card2.mp4';
import card3 from '../assets/card3.mp4';
import { ThemeProvider } from "@emotion/react";
import { theme } from './themes';
import './bg.css'





export default function Cards() {
  return (
    <div className='cards'>
    <ThemeProvider theme={theme}>
    <Box sx={{ alignItems: "center", justifyContent: "center", padding: "50px", display:"flex", color:"pink" }}>
    <Card className='card' sx={{ maxWidth: 300, margin:"20px"}}>
      <CardMedia
        component="video"
        height="150"
        src={card1}
        alt="card1"
      />
      <CardContent bgColor="rosana">
        <Typography color="#A267AC" gutterBottom variant="h5" component="div">
          Get Me Here!
        </Typography>
        <Typography color="#A267AC" variant="body2" >
           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. 
        </Typography>
      </CardContent>
      <CardActions sx={{ alignItems: "center", justifyContent:"center" }}>
        <Button variant='outlined' color='hello' size="small">Share</Button>
        
      </CardActions>
    </Card>


    <Card className='card' sx={{ maxWidth: 300, margin:"20px" }}>
      <CardMedia
        component="video"
        height="150"
        src={card2}
        alt="card2"
      />
      <CardContent>
        <Typography color="#A267AC" gutterBottom variant="h5" component="div">
        Get Me Here!
        </Typography>
        <Typography color="#A267AC" variant="body2" >
           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. 
        </Typography>
      </CardContent>
      <CardActions sx={{ alignItems: "center", justifyContent:"center" }}>
        <Button variant='outlined' color='hello' size="small">Share</Button>
        
      </CardActions>
    </Card>


    <Card className='card' sx={{ maxWidth: 300, margin:"20px" }}>
      <CardMedia
        component="video"
        height="150"
        src={card3}
        alt="card3"
      />
      <CardContent>
        <Typography color="#A267AC" gutterBottom variant="h5" component="div">
        Get Me Here!
        </Typography>
        <Typography color="#A267AC" variant="body2" >
           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. 
        </Typography>
      </CardContent>
      <CardActions sx={{ alignItems: "center", justifyContent:"center" }}>
        <Button variant='outlined' color='hello' size="small">Share</Button>
        
      </CardActions>
    </Card>


    </Box>
    </ThemeProvider></div>
  );
}