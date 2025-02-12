import { useState } from "react";
import '../stylesheet/project.css'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';



import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';









export default function Project2(){

    const [rows,editrows] =useState( [
        { id:1,name:'khaled shadid',graduate:2021, poster:"https://th.bing.com/th/id/OIP.FqrU9PC-CFa5KnESNXxLiwHaEK?rs=1&pid=ImgDetMain ",link: "link "},
        {id:2,name:'mohamed ahmad', graduate:2020,poster: "https://th.bing.com/th/id/OIP.0RrsfTfd9-v2eKd-SWnc1QHaJQ?w=736&h=920&rs=1&pid=ImgDetMain ",link: "link "},
        {id:3,name:'waleed khaled',graduate: 2023,poster: "https://th.bing.com/th/id/OIP.QR-VtSR62DgmRuw1nrHtrgHaFP?w=570&h=403&rs=1&pid=ImgDetMain ",link: " link "},
        {id:4,name:'sultan ahmad',graduate: 2019,poster: "https://i.pinimg.com/736x/c8/0a/10/c80a100a02e230491f43446c0c6223f9.jpg ",link: "link "},
        {id:5,name:'raed khaled',graduate: 2015,poster: "https://th.bing.com/th/id/OIP.wDIct-82h-9kvgSec5vWHAHaHa?w=908&h=908&rs=1&pid=ImgDetMain ",link: "link "},
      ]);


return(
    <>
    
   

<div id="pr2continer">

    <div class='pr2div'>         </div>



            <div id='pr2table'>
                  

            <div id='pr2headerdiv'>

                            
<Card sx={{ maxWidth: 1500 }}>
 <CardActionArea>
   <CardMedia
     component="img"
     height="120"
     image="https://th.bing.com/th/id/R.bcafc1431179dd2972e131942af35780?rik=57l%2b4GHiv9tHPw&pid=ImgRaw&r=0"
     alt="green iguana"
   />
   <CardContent>
   
     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <caption>here are students hard works</caption>
        <TableHead id='pr2thead'>
          <TableRow >
            <TableCell><h3>ID</h3></TableCell>
            <TableCell ><h3>Full Name</h3></TableCell>
            <TableCell ><h3>Poster</h3></TableCell>
            <TableCell ><h3>Graduate</h3></TableCell>
            <TableCell ><h3>Link</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((item,index) => (
            <TableRow key={index} id='pr2tbody'>
               <TableCell ><h4>{item.id}</h4></TableCell>
              <TableCell ><h4>{item.name}</h4></TableCell>
              <TableCell ><img id="pr2img" src={item.poster}/></TableCell>
              <TableCell ><h4>{item.graduate}</h4></TableCell>
              <TableCell ><h4>{item.link}</h4></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



                  </Typography>
   </CardContent>
 </CardActionArea>
</Card>




              </div>

<div id='divpr2add'>
<Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://th.bing.com/th/id/OIP.j22kpWkKUFokY1SBObaXSwHaEJ?w=536&h=300&rs=1&pid=ImgDetMain"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Add your project
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            share your project and show others your hard work   
          </Typography>
    <form id='pr2form' >
<div class='labelpr2'>       </div>
<label><h4>Full Name:</h4></label>
<input className='label1' type='text' placeholder="Enter your Full Name" required />

<label><h4>Poster:</h4></label>
<input className='label1' type='text' placeholder="Enter your Poster Link" required />

<label><h4>Graduate year:</h4></label>
<input className='label1' type='email' placeholder="Enter your Graduate year" required />

<label><h4>Project Link:</h4></label>
<input className='label1' type='password' placeholder="Enter your Project Link" required />

<label><h4>passward Again:</h4></label>
<input className='label1' type='password' placeholder="Enter your passward Again" required />
<br/>
<br/>
<Button type='submit' variant="contained" disableElevation id='signup'>
 Add project
</Button>
<br/>
<br/>
<br/>
<br/>
<br/>
</form>
        </CardContent>
      </CardActionArea>
    </Card>

    
</div>



           </div>

    <div class='pr2div'>                  </div>






</div>


    </>
)
}