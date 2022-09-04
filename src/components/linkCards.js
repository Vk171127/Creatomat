import React from 'react';
import animated1 from '../assets/animated1.png';
import { theme, hello } from './themes';
import { CardActionArea, Stack, ThemeProvider } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {CardMedia, CardActions, CardContent} from '@mui/material';
import { Card } from '@mui/material';
import './bg.css';
import Button from '@mui/material/Button';
import card1 from '../assets/card1.mp4';
import card2 from '../assets/card2.mp4';
import card3 from '../assets/card3.mp4';






export default function LinkCards() {


    return (
        <div >
        <ThemeProvider theme={theme}> <Stack direction= "row"   sx={{ padding: "3%", borderRadius: "10px", maxWidth:"100%", justifyContent:"center" }} >
           <div className='linkCards'>
           <Card className='card' sx={{ maxWidth: 300, margin:"20px"}}><CardActionArea>
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
      <CardActions sx={{ alignItems: "center", justifyContent:"center", paddingBottom:"10%" }}>
        <Button variant='contained' color='hello' size="small">Learn More</Button>
        
      </CardActions>
      </CardActionArea>
    </Card>
    </div>
    <div className='linkCards'>
           <Card className='card' sx={{ maxWidth: 300, margin:"20px"}}><CardActionArea>
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
      <CardActions sx={{ alignItems: "center", justifyContent:"center", paddingBottom:"10%" }}>
        <Button variant='contained' color='hello' size="small">Learn More</Button>
        
      </CardActions>
      </CardActionArea>
    </Card>
</div>
          
    <div className='linkCards'>       
           <Card className='card' sx={{ maxWidth: 300, margin:"20px"}}><CardActionArea>
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
      <CardActions sx={{ alignItems: "center", justifyContent:"center", paddingBottom:"10%" }}>
        <Button variant='contained' color='hello' size="small">Learn More</Button>
        
      </CardActions>
      </CardActionArea>
    </Card>
    </div>

          
    <div className='linkCards'>
           <Card className='card' sx={{ maxWidth: 300, margin:"20px"}}><CardActionArea>
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
      <CardActions sx={{ alignItems: "center", justifyContent:"center", paddingBottom:"10%" }}>
        <Button variant='contained' color='hello' size="small">Learn More</Button>
        
      </CardActions>
      </CardActionArea>
    </Card>
    </div>

          
    <div className='linkCards'>
           <Card className='card' sx={{ maxWidth: 300, margin:"20px"}}><CardActionArea>
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
      <CardActions sx={{ alignItems: "center", justifyContent:"center", paddingBottom:"10%" }}>
        <Button variant='contained' color='hello' size="small">Learn More</Button>
        
      </CardActions>
      </CardActionArea>
    </Card>
    </div>

          
    <div className='linkCards'>

           <Card className='card' sx={{ maxWidth: 300, margin:"20px"}}><CardActionArea>
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
      <CardActions sx={{ alignItems: "center", justifyContent:"center", paddingBottom:"10%" }}>
        <Button variant='contained' color='hello' size="small">Learn More</Button>
        
      </CardActions>
      </CardActionArea>
    </Card>
    </div>

          
           </Stack>
           </ThemeProvider>
           </div>
    );
}