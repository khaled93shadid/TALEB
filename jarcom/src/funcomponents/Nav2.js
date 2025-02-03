import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../stylesheet/Nav.css';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
     return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id='nav2container'>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
            <MenuIcon /> 
           <a href='/Home.js'> <img id='logo'  src='data:image/jpeg;base64,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' alt='logo'/> </a>
            <MenuIcon /> 
            
          </IconButton>
          <Typography id='nav2taleb' variant="h6" component="div" sx={{ flexGrow: 1 }}>
           T A L E B    
          </Typography>
          <Button color="inherit"><Link to='/signup.js' className='nav2link'> signup</Link></Button>
          <Button color="inherit"> <Link to="/login.js" className='nav2link' >login</Link> </Button>
          <Button color="inherit">  <Link to='Nav1' className='nav2link'>  whatsnew </Link>  </Button>
          <Button color="inherit">  <Link to='profile.js' className='nav2link'> profile  </Link> </Button>
        </Toolbar>
      </AppBar>
      
    </Box>
    
  );
}