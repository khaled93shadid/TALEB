import * as React from 'react';
import { useState } from "react";
import '../stylesheet/project.css';


import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import BuildIcon from '@mui/icons-material/Build';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function createData(id,name, graduate, poster, link) {
  return { id,name, graduate, poster, link };
}

  





export default function Project() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpen1 = () => setOpen1(true);
    const handleClose = () => setOpen(false);
    const handleClose1 = () => setOpen1(false);
    
    
    const [name1,editname1]=useState('');
    const [poster1,editposter1]=useState('');
    const [year1,edityear1]=useState(0);
    const [link1,editlink1]=useState('');
    const [index1,editindex1]=useState(0);


    const [rows,editrows] =useState( [
      { id:1,name:'khaled shadid',graduate:2021, poster:"https://th.bing.com/th/id/OIP.FqrU9PC-CFa5KnESNXxLiwHaEK?rs=1&pid=ImgDetMain ",link: "link "},
      {id:2,name:'mohamed ahmad', graduate:2020,poster: "https://th.bing.com/th/id/OIP.0RrsfTfd9-v2eKd-SWnc1QHaJQ?w=736&h=920&rs=1&pid=ImgDetMain ",link: "link "},
      {id:3,name:'waleed khaled',graduate: 2023,poster: "https://th.bing.com/th/id/OIP.QR-VtSR62DgmRuw1nrHtrgHaFP?w=570&h=403&rs=1&pid=ImgDetMain ",link: " link "},
      {id:4,name:'sultan ahmad',graduate: 2019,poster: "https://i.pinimg.com/736x/c8/0a/10/c80a100a02e230491f43446c0c6223f9.jpg ",link: "link "},
      {id:5,name:'raed khaled',graduate: 2015,poster: "https://th.bing.com/th/id/OIP.wDIct-82h-9kvgSec5vWHAHaHa?w=908&h=908&rs=1&pid=ImgDetMain ",link: "link "},
    ]);
    
    
  





      
 
    return(
<>



<TableContainer component={Paper} id='TableContainer'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead id='TableHead'>
          <TableRow>
            <TableCell><h2>#</h2> </TableCell>
            <TableCell ><h3>Full Name</h3> </TableCell>
            <TableCell ><h3 id='poster'>Poster</h3></TableCell>
            <TableCell ><h3>Year Of Graduate</h3></TableCell>
            <TableCell ><h3>Project link</h3> </TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((item,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{item.id}</TableCell>
              <TableCell component="th" scope="row"><h4>{item.name}</h4></TableCell>
              <TableCell ><img id='posterimage' src={item.poster} alt='poster image'/></TableCell>
              <TableCell ><h4>{item.graduate}</h4></TableCell>
              <TableCell ><a id='arow' href=''> {item.link}</a> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    


<div  id='imgdiv'>
<Button onClick={handleOpen} size="small" id="formb1"  variant="contained" disableElevation  >
     Add Project
    </Button>
    <Button onClick={handleOpen1} size="small" id="formb1"  variant="contained" disableElevation  >
     Delete Project
    </Button>

    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  id='modal'>
          <Typography class='modaltxt' id="modal-modal-title" variant="h6" component="h2">
            ADD PROJECT:
          </Typography>
          <form class='modalform' onSubmit={(Event)=>{
            Event.preventDefault();  //id,name, graduate, poster, link
            editrows([...rows,{name:name1,graduate:year1,poster:poster1,link:link1}]);
            editname1('');
            edityear1();
            editposter1('');
            editlink1('');


          
          }}>
            <label > <h4 class='labelh4'>full name:</h4> </label>
            <input class='label' type='text' placeholder='full name' value={name1} onChange={(Event)=>{editname1(Event.target.value)}}  />
            <br/>
            <label > <h4 class='labelh4'>poster:</h4> </label>
            <input class='label' type='text' placeholder='poster' value={poster1} onChange={(Event)=>{editposter1(Event.target.value)}}  />
            <br/>
            <label > <h4 class='labelh4'>Year Of Graduate:</h4> </label>
            <input class='label' type='text' placeholder='Year Of Graduate' value={year1}  onChange={(Event)=>{edityear1(Event.target.value)}}   />
            <br/>
            <label > <h4>Project link:</h4> </label>
            <TextField
          id="outlined-multiline-static"
          label="enter project url"
          multiline
          rows={3}
          defaultValue=""
          value={link1}
          onChange={(Event)=>{editlink1(Event.target.value)}}
          />
            <br/>
            <br/>
            <br/>
            
            <Button  variant="contained" disableElevation id='b5' type='submit'> Add </Button>
          </form>
          
        </Box>
      </Modal>
    </div>           
   






    <div>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  id='modal'>
          <Typography class='modaltxt' id="modal-modal-title" variant="h6" component="h2">
            Delete PROJECT:
          </Typography>
          <form class='modalform' onSubmit={(Event)=>{
            Event.preventDefault();
            const afterdelete1 = rows.filter((_,i)=>i !== index1);
            editrows(afterdelete1);
            console.log(index1);
    
            

          
          }}>
            <label > <h4 class='labelh4'>Project ID:</h4> </label>
            <input class='label'  placeholder='Project ID' type='number'  onChange={(Event)=>{editindex1(Event.target.value)}}  />
            <br/>
            
            <br/>
            <br/>
            <br/>
            
            
            <Button  type='submit'  variant="contained" disableElevation id='b4' > Delete </Button>
          </form>
          
        </Box>
      </Modal>
    </div> 


    <br/>
    <br/>
    <br/>
    <br/>
    </div>
   


</>   
    )
}