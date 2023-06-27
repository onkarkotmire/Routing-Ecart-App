import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './Product.css'

export default function Products() {

  const[item, setItem] = useState([]);

 
  useEffect(()=>{
    axios.get("http://localhost:5005/data").then((res)=>{
     console.log(res.data)
     setItem(res.data)
    }).catch(()=>{
      alert("Error Found")
    })
  },[])

  const adddata=(id)=>
  {
   item.map((e)=>
   {
    if(e.id===id){
        axios.post("http://localhost:5005/cart",e).then(()=>
     {
        alert("product added successfully")
     }).catch(()=>
     {
        alert("can't add product")
     })
    }

   })
 }

  return (
    <div className='main-box'>
     {item.map((e)=>{
     return <div className="box">
     <p>Title: {e.title}</p>
     <img src={e.image} alt=""/>
     <p>Price:{e.price}</p>
     <button onClick={()=>{
      adddata(e.id)
     }}>Add to Cart</button>
     </div>
     })
    } 
    </div>
  )
}
