import { useState } from "react";
import '../stylesheet/project.css';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

import SvgIcon from '@mui/material/SvgIcon';
import { getRowIdFromRowModel } from "@mui/x-data-grid/internals";
import { gridRowIsEditingSelector } from "@mui/x-data-grid/hooks/features/editing/gridEditingSelectors";
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


  
  
  const paginationModel = { page: 0, pageSize: 5 };
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
  





export default function Project() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function getRowId() {
        return rows.internalId;
      }

    const [columns,editcolumn] =useState([
        { field: 'id', headerName: 'ID', width: 70  },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        
        {
          field: 'project',
          headerName: 'project',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
         
        },
      ]);

    const [rows,editrows] =useState( [
        { id: 1, lastName: 'Snow', firstName: 'Jon',project:'pr1' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei' ,project:'pr1'},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime',project:'pr1'  },
        
      ]);
      
const[firstn,editfirstn]=useState('');
const[lastn,editlastn]=useState('');
const[projectn,editprojectn]=useState('');
const[idn,setidn]=useState();


const delete1=(rows)=>{
    if(DataGrid.checkboxSelection){
        const rowafterdelete = rows.filter((_,i)=> i !==DataGrid.checkboxSelection());
        editrows(rowafterdelete);
    }

   

}



      

    return(
<>
<div id='imgdiv'>
<br/>       
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>


<Paper sx={{ height: 400, width: '99%' }} id='paper'>
      <DataGrid
       rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
              />
              
    </Paper>
    

<div  id='imgdiv'>
<Button onClick={handleOpen} size="small" id="formb1"  variant="contained" disableElevation  >
      Project
    </Button>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id='modal'>
          <Typography class='modaltxt' id="modal-modal-title" variant="h6" component="h2">
            ADD<HomeIcon color="primary" />PROJECT:
          </Typography>
          <form class='modalform' onSubmit={(Event)=>{
            Event.preventDefault();
            editrows([...rows,{firstName:firstn,lastName:lastn,project:projectn,id:idn}]);
            editfirstn('');
            editlastn('');
            editprojectn('');


          
          }}>
            <label > <h4 class='labelh4'>first name:</h4> </label>
            <input class='label' type='text' placeholder='first name' value={firstn} onChange={(Event)=>{editfirstn(Event.target.value)}} />
            <br/>
            <label > <h4 class='labelh4'>last name:</h4> </label>
            <input class='label' type='text' placeholder='last name' value={lastn} onChange={(Event)=>{editlastn(Event.target.value)}} />
            <br/>
            <label > <h4>Project URL:</h4> </label>
            <TextField
          id="outlined-multiline-static"
          label="enter project url"
          multiline
          rows={3}
          defaultValue=""
          value={projectn}
          onChange={(Event)=>{editprojectn(Event.target.value)}}
          />
            <br/>
            <br/>
            <br/>
            
            <Button  variant="contained" disableElevation id='b5' type='submit'> Add </Button>
            <Button onClick={delete1}  variant="contained" disableElevation id='b4' > Delete </Button>
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