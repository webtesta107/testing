import { useState } from "react"

export  default function App(){
    const[list,setList]=useState([{name:"apple",price:100},{name:"banana",price:133}])
    const[item,setItem]=useState({name:"",price:""})

function handleSave(){
   setList([...list,item])
   setItem({name:"",price:""});
}

    return(
<div>

<input type="text" value={item.name} onChange={(e)=>setItem({...item,name:e.target.value})}/>
<input type="number" value={item.price } onChange={(e)=>setItem({...item,price:e.target.value})}/>
<button onClick={handleSave}>add</button>
</div>

    )
}