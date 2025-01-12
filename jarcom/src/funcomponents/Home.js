import react from 'react';
import { useState } from 'react';

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
<h1>{msg}</h1>
<h1>counter:{count}</h1>
<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>
<button onClick={editmsg}>EDIT</button>
</>
)

    
}