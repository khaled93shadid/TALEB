import react from 'react';
import { useState } from 'react';
import '../stylesheet/Home.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));





export default function Home  ()

{

  const[data,setdata]=useState([
{
  text:'Graduated Project',
  img:'https://th.bing.com/th/id/R.c43ef7d4e538f08c314021751dcffafa?rik=9ft4tc0sRch7CA&pid=ImgRaw&r=0',
  link1:'/project.js'
},
{
  text:'Latest News',
  img:'https://s3.amazonaws.com/kajabi-storefronts-production/blogs/3184/images/boSG6B6HQQqRUjz2Tp1a_Screen-Shot-2016-05-14-at-10.37.33-AM-1024x575.png',
  link1:'/News.js',
},
{
  text:'Chat with Advisor',
  img:'https://static.vecteezy.com/system/resources/previews/015/720/174/non_2x/eps10-white-phone-call-or-telephone-abstract-icon-isolated-on-black-background-contact-us-or-hotline-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-app-vector.jpg',
  link1:'/chat.js'
},
  ]); 



  

   


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

<div class='divbody2'>
    

<div id='area1'>

<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://cdn.pixabay.com/photo/2016/03/30/02/21/idea-1289871_640.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          share your thoughts&Ideas
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            what do you feel about the study and every thing you express your self by 
            sharing your positive ideas wtih other collegeus
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

</div>

<div id='area2'>
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1492200448/articles/2014/04/30/how-2014-is-shaping-up-to-be-the-darkest-money-election-to-date/140429-maguire-dark-money-tease_nsfaag"
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Earn money 
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            do you have something special to sell like food,coffee or any thing 
            that maybe your collegues will need 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</div>
<div id='area3'> 
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://static.vecteezy.com/system/resources/previews/000/574/215/non_2x/vector-sign-of-user-icon.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          create your own profile
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            a special profile 
            contain your informationt to let other know more 
            about you
            <br/>
            <br/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
     </div>


</div>




<div class='divbody2'>
<div id='area1' class='margintop'>

<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://wallpapercave.com/wp/wp2297912.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          support your collegeus
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            when do you have break time to help your collegeus in particular subject
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

</div>

<div id='area2' class='margintop'>
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://media.istockphoto.com/id/898607804/vector/friends-vector-icon.jpg?s=612x612&w=0&k=20&c=UGOThNNAdgh9zzGHsj0rZMIYP9hh7THCBDu4S9tQWgA="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          make new friends 
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            make new friends every day to have a good time
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</div>
<div id='area3' class='margintop'> 
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://th.bing.com/th/id/OIP.QybkYb5z0MiToJIGpLjjpgHaHD?rs=1&pid=ImgDetMain"
          alt="green iguana"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <a className='a' href='main.html' >rate others</a>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            rate other works and share your ideas about them

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    

     </div>

</div>


<div class='divbody'>
        
      
        
          <Grid  size={{ xs: 4, sm: 10, md: 6}}
           containerdirection="row"
           sx={{
             justifyContent: "center",
             alignItems: "stretch",
           }}>
          {data.map((item,index)=>
          
            
            <Item key={index} id='item'>
              <div id='key'>
              <a id='at' href={item.link1}> <h1  id='h'> {item.text}</h1> </a>
                 <img id='imgarea2' src={item.img} />
                </div>
            </Item>
          )}     
          </Grid>
         


       

</div>






<div id='imgdiv'>
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