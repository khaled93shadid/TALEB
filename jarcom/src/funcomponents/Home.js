import react from 'react';
import { useState } from 'react';
import '../stylesheet/Home.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export default function Home  ()
{
const[count,setcount]=useState(0);
const[msg,setmsg]=useState('original messege');

const increment =()=>
    {
    setcount(count+1);
    
    }
    const decrement =()=>
        {
        setcount(count-1);
        
        }
    const editmsg =()=>
    {
    setmsg('this is edited msg');    
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
          alt="green iguana"
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
            a special profile contain your informationt to let other know more 
            about you
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
     </div>


<div id='area4'><img id='imgarea2' src='' /></div>
<div id='area3'></div>
<div id='area4'><img id='imgarea2' src='' /></div>

</div>




<div class='divbody2'>
<div id='area1'>

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

<div id='area2'>
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
<div id='area3'> 
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
          rate others
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
    

<div id='area1'><h1 className='h1class'>Add your graduated project </h1>

</div>
<div id='area2'><img class='imgarea1' src='https://th.bing.com/th/id/R.c43ef7d4e538f08c314021751dcffafa?rik=9ft4tc0sRch7CA&pid=ImgRaw&r=0' /></div>
<div id='area3'><h1 className='h1class'>Latest news</h1></div>
<div id='area4'><img id='imgarea2' src='https://s3.amazonaws.com/kajabi-storefronts-production/blogs/3184/images/boSG6B6HQQqRUjz2Tp1a_Screen-Shot-2016-05-14-at-10.37.33-AM-1024x575.png' /></div>
<div id='area3'><h1 className='h1class'>Call Advisor</h1></div>
<div id='area4'><img id='imgarea2' src='https://static.vecteezy.com/system/resources/previews/015/720/174/non_2x/eps10-white-phone-call-or-telephone-abstract-icon-isolated-on-black-background-contact-us-or-hotline-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-app-vector.jpg' /></div>

</div>

<div class='divbody1' >

    <div> </div>
    <div><img className='img' src='https://th.bing.com/th/id/OIP.bX52vTMUaO4fSjm9EBhFlgHaHa?rs=1&pid=ImgDetMain '  />
    <img className='img' src=' https://cplf.ca/wp-content/uploads/2023/11/Client-Profile-Image-1.png'  /> 
    <img className='img' src='https://th.bing.com/th/id/R.8546820ee580a8cdb3a9c1ebd11a4daa?rik=4fwMklQJCQU1Ow&riu=http%3a%2f%2fredonline.cdnds.net%2fmain%2fthumbs%2f25788%2fstack_of_books.jpg&ehk=xwtWWiDiDhhxV8yXIhXFgeNFvZ4ETt83uVe2km2jabI%3d&risl=&pid=ImgRaw&r=0 '  />
     </div>
    <div> </div>
    


    <div> </div>
    <div><img className='img' src='https://th.bing.com/th/id/R.3c67e53d682589dcb8ce02dd3ac1e20c?rik=LeUqj%2bnBd3%2f0WA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f11%2f17%2f239445-coffee-coffee_beans-cup.jpg&ehk=%2bEd%2bhMjaHGMrExklwM9MNbALfkaDNqvDmS67gs%2bf2OA%3d&risl=&pid=ImgRaw&r=0'  />
    <img className='img' src='https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg'  /> 
    <img className='img' src='https://motionarray.imgix.net/preview-736491-xt36ePQvnliK9iU2-large.jpg?w=1400&q=60&fit=max&auto=format'  />
     </div>
    <div> </div>

    <div> </div>
    <div><img className='img' src='https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg'  />
    <img className='img' src=' https://cdn-icons-png.flaticon.com/512/3870/3870822.png'  /> 
    <img className='img' src='https://thumbs.dreamstime.com/b/open-books-14711577.jpg '  />
     </div>
    <div> </div>


</div>

</>
)

    
}