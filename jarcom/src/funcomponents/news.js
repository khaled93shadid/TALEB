import {useState} from 'react';
import '../stylesheet/news.css'


import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';




import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.primary,
    height: 300,
    lineHeight: '60px',
    borderRadius:'10px',
    border:'dotted grey 1px',
    
    
  }));
  
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });
  


  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }



export default function News(){

const[data,setdata]=useState([
{
  img:'https://wallpapercave.com/wp/wp8265064.jpg',
  header:'English course',
  content:'khaled hafez sahdid',  
},
{
  img:'https://th.bing.com/th/id/OIP.SyQPoSWrtzvjdZkQKJdIJQHaE8?rs=1&pid=ImgDetMain',
  header:'first term start ',
  content:'khaled hafez sahdid',  
},
{
  img:'https://th.bing.com/th/id/OIP.sdceOHXT5CxQwiKIj52oMAHaFL?rs=1&pid=ImgDetMain',
  header:'library time',
  content:'khaled hafez sahdid',  
},
    
])





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
<Stack direction="row" spacing={50} sx={{ alignItems: 'flex-end' }}>
      <HomeIcon fontSize="small" />
      
      <HomeIcon />
      
      <HomeIcon fontSize="large" />
     
      <HomeIcon sx={{ fontSize: 40 }} />
    </Stack>
<Grid container spacing={2}>
      {[lightTheme ].map((theme, index) => (
        <Grid item xs={50} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 6,
                borderRadius: 2,
                bgcolor: 'lavenderblush',
                display: 'grid',
                gridTemplateColumns: { md: '1fr ' },
                gap: 4,
              }}
            >
{data.map((item,index)=>
<div id='newscontainer'>

    <div>          
    <Box sx={{ color: 'action.active' }}>
      <Badge color="secondary" variant="dot" id='badge'>
        <MailIcon />
      </Badge>
    </Box>
</div> 
                <Item >
                    
                    <div id='newsdiv'>
                        
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      
        <CardMedia
          component="img"
          height="295"
          image={item.img}
          alt="picture"
          id='newspic'
        />
       
      </CardActionArea>
    </Card>
    <div>
    <h1 id='cardnewsh1'>{item.header}</h1>
    <h2 id='cardnewsh2'>{item.content}</h2>

    </div>
                    

                    </div>
               
                </Item>

    
                </div> 
                )}

            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
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