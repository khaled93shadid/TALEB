import react from 'react';
import { useState } from 'react';
import '../stylesheet/Home.css';

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
<br/>
<br/>
<br/>
<br/>
</div>

<div class='divbody'>
    

<div id='area1'><h1 className='h1class'>share your thoughts&Ideas </h1>
<br/>
<br/>
<br/>
<br/>
</div>
<div id='area2'><img class='imgarea1' src='https://cdn.pixabay.com/photo/2016/03/30/02/21/idea-1289871_640.jpg' /></div>
<div id='area3'><h1 className='h1class'>Earn money &give support</h1></div>
<div id='area4'><img id='imgarea2' src='https://st3.depositphotos.com/12060448/14627/i/450/depositphotos_146277809-stock-photo-selective-focus-of-coins-and.jpg' /></div>
<div id='area3'><h1 className='h1class'>create your own profile</h1></div>
<div id='area4'><img id='imgarea2' src='https://th.bing.com/th/id/OIP.Od4m4w455EEToOQDKESqvgHaFJ?rs=1&pid=ImgDetMain' /></div>

</div>

<div class='divbody1' >

    <div> </div>
    <div><img className='img' src='https://th.bing.com/th/id/OIP.bX52vTMUaO4fSjm9EBhFlgHaHa?rs=1&pid=ImgDetMain '  />
    <img className='img' src=' https://cplf.ca/wp-content/uploads/2023/11/Client-Profile-Image-1.png'  /> 
    <img className='img' src='https://th.bing.com/th/id/R.8546820ee580a8cdb3a9c1ebd11a4daa?rik=4fwMklQJCQU1Ow&riu=http%3a%2f%2fredonline.cdnds.net%2fmain%2fthumbs%2f25788%2fstack_of_books.jpg&ehk=xwtWWiDiDhhxV8yXIhXFgeNFvZ4ETt83uVe2km2jabI%3d&risl=&pid=ImgRaw&r=0 '  />
     </div>
    <div> </div>
    


    <div> </div>
    <div><img className='img' src='https://th.bing.com/th/id/OIP.bX52vTMUaO4fSjm9EBhFlgHaHa?rs=1&pid=ImgDetMain '  />
    <img className='img' src=' https://cplf.ca/wp-content/uploads/2023/11/Client-Profile-Image-1.png'  /> 
    <img className='img' src='https://th.bing.com/th/id/R.8546820ee580a8cdb3a9c1ebd11a4daa?rik=4fwMklQJCQU1Ow&riu=http%3a%2f%2fredonline.cdnds.net%2fmain%2fthumbs%2f25788%2fstack_of_books.jpg&ehk=xwtWWiDiDhhxV8yXIhXFgeNFvZ4ETt83uVe2km2jabI%3d&risl=&pid=ImgRaw&r=0 '  />
     </div>
    <div> </div>

    <div> </div>
    <div><img className='img' src='https://th.bing.com/th/id/OIP.bX52vTMUaO4fSjm9EBhFlgHaHa?rs=1&pid=ImgDetMain '  />
    <img className='img' src=' https://cplf.ca/wp-content/uploads/2023/11/Client-Profile-Image-1.png'  /> 
    <img className='img' src='https://th.bing.com/th/id/R.8546820ee580a8cdb3a9c1ebd11a4daa?rik=4fwMklQJCQU1Ow&riu=http%3a%2f%2fredonline.cdnds.net%2fmain%2fthumbs%2f25788%2fstack_of_books.jpg&ehk=xwtWWiDiDhhxV8yXIhXFgeNFvZ4ETt83uVe2km2jabI%3d&risl=&pid=ImgRaw&r=0 '  />
     </div>
    <div> </div>


</div>

<div class='divbody'>
    

<div id='area1'><h1 className='h1class'>share your thoughts&Ideas </h1>
<br/>
<br/>
<br/>
<br/>
</div>
<div id='area2'><img class='imgarea1' src='https://cdn.pixabay.com/photo/2016/03/30/02/21/idea-1289871_640.jpg' /></div>
<div id='area3'><h1 className='h1class'>Earn money &give support</h1></div>
<div id='area4'><img id='imgarea2' src='https://st3.depositphotos.com/12060448/14627/i/450/depositphotos_146277809-stock-photo-selective-focus-of-coins-and.jpg' /></div>
<div id='area3'><h1 className='h1class'>create your own profile</h1></div>
<div id='area4'><img id='imgarea2' src='https://th.bing.com/th/id/OIP.Od4m4w455EEToOQDKESqvgHaFJ?rs=1&pid=ImgDetMain' /></div>

</div>


</>
)

    
}