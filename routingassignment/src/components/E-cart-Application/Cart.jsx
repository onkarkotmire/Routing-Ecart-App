import React from 'react'
import './Cart.css'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Cart() {
  
  const[cartitem, setcartItem] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5005/cart").then((res)=>{
     console.log(res.data)
     setcartItem(res.data)
    }).catch(()=>{
      alert("Error Found")
    })
  },[])

  const getProductData = (setcartItem) => {
    axios.get("http://localhost:5005/cart").then((res) => {
      console.log(res);
      setcartItem(res.data);
    });
  };

  const removedata=(id)=>
  {
   cartitem.map((e)=>
   {
    if(e.id===id){
     axios.delete(`http://localhost:5005/cart/${id}`,e).then((res)=>
     {  
        alert("product removed successfully")
        getProductData(setcartItem)
     }).catch(()=>
     {
        alert("can't removed product")
     })
    }

   })
 }
  

  return (
    <div style={{textAlign:" center"}}>
      {cartitem.map((e)=>{
      return <div className='cart-main-box'>
        <div className="cart-box">
          <img src={e.image} alt="" className='image' />
          <div className="content-box">
            <h3>Product Title</h3>
            <p>{e.title}</p>
            <h3>Product Price</h3>
            <p>{e.price}</p>
            <h3>Description</h3>
            <p>{e.description}</p>
            <button onClick={()=>{removedata(e.id)}}>Remove</button>
          </div>
        </div>
      </div> 
     })
}
    </div>
  )
}
