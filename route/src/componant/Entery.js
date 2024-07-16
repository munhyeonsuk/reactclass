import React,{useState, useEffect} from 'react'

function Entery() {
   const bgcolor = ['red','green','blue']
//    useEffect(()=>{
//     document.querySelectorAll('li').forEach()
//    }) 
    return (
        <div>
            {
            bgcolor.map((v, i)=>{
                 return(
                    <button onClick={()=>{
                        document.body.style.backgroundColor = v;
                    }}>{v}</button>
                 )
            })
          }
        </div>
    )
}

export default Entery
