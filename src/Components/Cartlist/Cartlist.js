import {  useContext, useEffect, useState } from 'react';
import contextApp from '../../context';
import './Cartlist.css'
function Cartlist(props) {
  const[price,setprice]=useState(props.item.price)
  const {dispatcherevent} =useContext(contextApp)
  
  useEffect(()=>{
    setprice(props.item.price * props.item.qty)
  
  },[props])

  function handleqty(q){
    props.item.qty=q
    setprice(props.item.price*q)
    dispatcherevent("Updateitem",props.item)
  }
  function deleteitem(){
    dispatcherevent("Deleteitem",props.item)
  }

  return (
    <div className='container'>
      <div className="row m-3 mainbor rounded ">
        <img src={props.item.thumbnail} className="cartimg col-md-1 col-4 align-self-center mx-auto" alt="..." />
        <h5 className="col-md-7  align-self-center">{props.item.title} </h5>
        <button className="col-md-1 col-4 btn btn-danger align-self-center " onClick={deleteitem}>Delete</button>
        <div className='col-md-1 col-4 align-self-center fw-bold text-center'>&#x20b9; {price} </div>
        <div className='col-md-2 col-4 btn-group align-self-center'>
        <button className=" btn btn-primary " onClick={()=>handleqty(props.item.qty+1)}>+</button>
       <button className='btn btn-disabled btn-secondary fw-bold '>{props.item.qty}</button> 
        <button className="btn btn-primary " onClick={()=>handleqty(props.item.qty<=1?0:props.item.qty-1)}>-</button>
        </div>
        
        
        
      
        </div>
    </div>
  );
}

export default Cartlist;
