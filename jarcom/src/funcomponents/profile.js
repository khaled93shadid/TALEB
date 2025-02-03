import{react} from 'react';
import { useState } from 'react';
import '../stylesheet/profile.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import BuildIcon from '@mui/icons-material/Build';




export default function Profile(){
    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
      }));
      


return(
<>
<div id='divborder'>
<div id='container'>
    <div id='area1'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.skynewsarabia.com/images/v1/2023/12/10/1676794/1200/630/1-1676794.JPG"
          alt="green iguana"
          id='img1'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            (khaled shadid)
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }}>
            Im khaled shadid 31 years old ,Im customerService Advisor ,I study computer science at yurmok university 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>


    <div id='area2'>
        
      <img id='img55' src='https://wallpapercave.com/wp/wp9607777.jpg' />    
       
    </div>

    <div id='area3'>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <Button variant="contained" disableElevation id='b1'>
      update profile  
    </Button>
    
   
    </div>
</div>
<br/>
<br/>
<br/>
<br/>
</div>

<div id='bodyprofile'>
    <div id='share'>
        <h1 id='h1share'>what do you think,share something... </h1>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' } }}
      noValidate
      autoComplete="off"
      id='box'
    >
      <div>
      <TextField
          id="outlined-multiline-static"
          label="write here"
          multiline
          rows={6}
          defaultValue=""
        />
        
        </div>
        <Button variant="contained" disableElevation id='b2'>
      share
    </Button>
        </Box>
        
    </div>

</div>

<div  className='cardprofile'>

<Card sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image="https://th.bing.com/th/id/OIP.018ajk3MILmEsi_64slCOQHaE8?rs=1&pid=ImgDetMain"
          alt="picture"
          
          
        />
        
      </CardActionArea>
      <CardActions>
      <Button variant="contained" disableElevation className='b3'>
      delete
    </Button>      
    </CardActions>
    </Card>
    <h3 className='h22'>text here</h3>
</div>
<div  className='cardprofile'>

<Card sx={{ maxWidth: 345 }} >
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image="https://th.bing.com/th/id/OIP.Hu0hRphGtbw9LdRWftt9hgHaE8?rs=1&pid=ImgDetMain"
          alt="picture"
         
          
        />
      </CardActionArea>
      <CardActions>
      <Button variant="contained" disableElevation className='b3'>
      delete
    </Button>
      </CardActions>
    </Card>
    <h3 className='h22'>text here</h3>
</div>
<div className='cardprofile'>

<Card sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image="https://th.bing.com/th/id/OIP.TeVPb13LkxwuEeOyy4783gHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain"
          alt="picture"
          
          
        />
        
      </CardActionArea>
      <CardActions>
      <Button variant="contained" disableElevation className='b3'>
      delete
    </Button>
      </CardActions>
    </Card>
    <h3 className='h22'>text here</h3>
</div>
<div id='imgdiv'>
<br/>       
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>

</>
)
}