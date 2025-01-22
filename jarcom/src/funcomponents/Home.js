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

<div id='divbody'>

<div id='area1'><h1>share your thoughts&Ideas </h1></div>
<div id='area2'><img id='imgarea1' src='https://cdn.pixabay.com/photo/2016/03/30/02/21/idea-1289871_640.jpg' /></div>
<div id='area3'><h1>Earn money &give support</h1></div>
<div id='area4'><img id='imgarea2' src='https://st3.depositphotos.com/12060448/14627/i/450/depositphotos_146277809-stock-photo-selective-focus-of-coins-and.jpg' /></div>

</div>
</>
)

    
}