import { useState } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Cartpage from './Pages/Cart/Cartpage';
import contextApp from './context';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Signin/Login';
import Signup from './Pages/Signup/Signup';

function App() {

  const [cartitem,setcartitem]=useState([])

  const dispatcherevent =(actiontype,payload)=>{
    console.log("event called")
    switch(actiontype){
      case "Additem":{
        let items=cartitem.slice();
        items.push(payload)
        setcartitem(items)
        console.log(cartitem)
        break;
      }
      case "Updateitem":{
        let items=cartitem.slice();
        let index=cartitem.findIndex((i)=>i.id===payload.id)
        items[index]=payload;
        setcartitem(items)
        console.log(cartitem)
        break;

      }
      case "Deleteitem" :{
        let items=cartitem.slice();
        let index=cartitem.findIndex((i)=>i.id===payload.id);
        items.splice(index,1);
        setcartitem(items);
        console.log(cartitem);
        break;
      }
      default:{
        console.log("Invalid")
      }
    }
  }

  return (
    <div>
      <contextApp.Provider value={{cartitem,dispatcherevent}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/cart' element={<Cartpage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        
      </Routes>
      </BrowserRouter>
      </contextApp.Provider>
    </div>
  );
}

export default App;
