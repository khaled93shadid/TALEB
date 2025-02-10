import react from 'react';
import { useState } from 'react';
import '../stylesheet/chat.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import Modal from '@mui/material/Modal';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';  
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));
  
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });
  

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,};
  




export default function Chat(){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [data,editdata]=useState([
          {ask:'i wonder whats the best way to have excellent in almost all subjects ?',
           rep:'you have to study hard' },
          {ask:'what is the best way to study cs310 course ? ',
            rep:'you have to work hard'
          },
    ]);
   
    const [ask1,editask1]=useState('');

    
    const [replay1,editreplay1]=useState('');







    return(
        <>
     

     <div id='continerchat'>
   <Grid container spacing={1} id='paperchat'>
      {[darkTheme].map((theme, index) => (
        <Grid item xs={50} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 6,
                borderRadius: 2,
                bgcolor: 'background.default',
                
                gap: 4,
              }}
            >
              
                <Item >
                
                  <h1>What do you want to know?</h1>
                </Item>
                <Item >
                
                  <h1>Just Ask the Advisor</h1>
                </Item>
              
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>  
     
    </div>

    <div>


    <Grid container spacing={1} id='paperchat'>
      {[darkTheme].map((theme, index) => (
        <Grid item xs={50} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 6,
                borderRadius: 2,
                bgcolor: 'background.default',
                
                gap: 4,
              }}>

                <form onSubmit={(Event)=>{
                    Event.preventDefault();
                    editdata([...data,{ask:ask1}]);
                    editask1('');
                }}>
                <TextField
                    id="outlined-multiline-static"
                    label=""
                    multiline
                    rows={5}
                    value={ask1}
                    onChange={(Event)=>{editask1(Event.target.value)}}
                              class='txtfield' />
                <Item >
                <Button size='large' type='submit'  variant="contained" disableElevation id='bchat'>Ask</Button>
                 </Item>
                 
              </form>
            </Box>

          </ThemeProvider>
        </Grid>
      ))}
    </Grid>  
 

    </div>







    <div>

    <Grid container spacing={1} id='paperchat'>
      {[darkTheme].map((theme, index) => (
        <Grid item xs={50} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 6,
                borderRadius: 2,
                bgcolor: 'background.default',
                gap: 4, }}>   
                {data.map((item,index)=>
                <div key={index} id='itemchat'>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
                <CardContent>

          <Typography gutterBottom variant="h5" component="div">
               {item.ask}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <Button size='large' onClick={handleOpen} variant="contained" disableElevation id='bchat1'>Replay</Button>          
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>

                    
                    <div> <i><h2 id='h2chat1'>Advisor Replay</h2></i>  
                     
                        <h3 id='h2chat2'> {replay1}</h3>
                     
                     


                    </div>
                    <br/>              
                    <br/>              
 
                 </div>
                  )}
              
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>  
 </div>



 <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id='modal'>
          <Typography class='modaltxt' id="modal-modal-title" variant="h6" component="h2">
            Send Replay:
          </Typography>
          <form class='modalform' onSubmit={(Event)=>{
            Event.preventDefault();
            const updatedreplay = [replay1];
            editreplay1(updatedreplay);
             
           
            /*
            const updatedname = [name];
            setname(updatedname);
            const updatedstate=[state];
            setstate(updatedstate);
            const updatedimage=[imagestate];
            setimagestate(updatedimage)
            */
           }}>
         <TextField
          id="outlined-multiline-static"
          label="write replay here"
          multiline
          rows={6}
          defaultValue=""
          value={replay1}
          onChange={(Event)=>{editreplay1(Event.target.value)}} 
          />
            <br/>
            <br/>
            <br/>
            
            <Button  variant="contained" disableElevation id='b5' type='submit'> replay </Button>
            <Button onClick={handleClose} variant="contained" disableElevation id='b4' > close </Button>
          </form>
          
        </Box>
      </Modal>
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