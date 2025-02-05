import{react} from 'react';
import '../stylesheet/whatsnew.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Profile from './profile';

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }



export default function Whatsnew(){
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);


return(
<>



<div id='continer1'>
<div id='div1'>



</div>



                 <div id='div2'>


            <div className='card1'>
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image='https://th.bing.com/th/id/OIP.018ajk3MILmEsi_64slCOQHaE8?rs=1&pid=ImgDetMain'
          alt="picture"
        />
        <CardContent>
          
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
          
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
       <div> <h3>Im enjoy my coffiee while working</h3></div>
       <div> <h1>last</h1></div>


    </div>

    <div className='card1'>
                 <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://th.bing.com/th/id/R.744c84bea7c61fad933497e23ab2f2da?rik=XUcQvbvPOM7yLQ&riu=http%3a%2f%2fcdn.taste.com.au%2fimages%2frecipes%2fsfi%2f2005%2f07%2f1018.jpg&ehk=45WmqnZucECJnQ4wEgA1lZ43QP1MLSldWj%2fqD%2bs%2fGY0%3d&risl=&pid=ImgRaw&r=0"
          alt="picture"
        />
        <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div><h3>my breakfast for today</h3></div>
       <div> <h1>last</h1></div>

    </div>


    <div className='card1'>
                 <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://th.bing.com/th/id/OIP.n3sAXxDyR0gM6xT1ZwmXdQHaE8?rs=1&pid=ImgDetMain"
          alt="picture"
        />
        <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
                 </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div> <h3>studying for the exam next week</h3></div>
    <div> <h1>last</h1></div>

    </div>


   


                 </div>







<div id='div3'>



</div>


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