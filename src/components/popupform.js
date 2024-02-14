import { useState } from "react";
import Model from 'react-modal';
const PopUpForm=()=>{
    const[visible, setvisible]=useState(false)
    return(
        <div>
            <button onClick={()=>setvisible(true)}>Open model</button>
            
        <Model isOpen={visible} onRequestClose={()=>setvisible(false)} style={{

            overlay:{
                background:"blur"
            },
            content:{
                width:'500px',
                height:"500px"
            }
        }}></Model>
        <h1>Model body</h1>           
        </div>
    )
}