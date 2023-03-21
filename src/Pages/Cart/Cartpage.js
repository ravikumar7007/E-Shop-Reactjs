import React, { useContext,useEffect} from "react";
import Cartlist from "../../Components/Cartlist/Cartlist";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import contextApp from "../../context";
import './Cartpage.css'



function Cartpage(){
    let {cartitem}=useContext(contextApp)
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
    let totalPrice = 0;
  totalPrice = cartitem.reduce((prev, curr) => {
    return Math.ceil(prev + (curr.price*curr.qty));
  }, 0);


    return (
        <div>
            <Header />
            <div className="bg-dark text-white fixed-top pricetab ">
            <h4 className="totalPrice text-end container ">Total Price: &#x20b9; {totalPrice}</h4>
            </div>
            
            <div className="min-vh-100 cartitem">
                {
                    cartitem.map((product,index)=>(
                        <Cartlist item={product} key={index} index={index} />

                    ))}
             
        

                
            </div>
            
            <footer className="mt-auto">
            <Footer />
            </footer>
            
        </div>
       
    )

}

export default Cartpage;