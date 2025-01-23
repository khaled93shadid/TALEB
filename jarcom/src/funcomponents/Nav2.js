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
      <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src='' alt='pic' />
            <MenuIcon />
          </IconButton>
          <Typography id='nav2taleb' variant="h6" component="div" sx={{ flexGrow: 1 }}>
           T A L E B    
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">signup</Button>
          <Button color="inherit">  <Link to='Nav1' className='nav2link'>  whatsnew </Link>  </Button>
          <Button color="inherit">profile</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}