import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function Signup(){
    const [user,setuser]=useState({})
    // user.address={}

    let navigate=useNavigate()
    function handleformSubmit(){
        
        fetch('https://fakestoreapi.com/users',{
        method:"POST",
        body:JSON.stringify(user)
    })
    .then(res=>res.json)
    .then(res=>console.log(res))
   
       navigate("/login")
    }
    


    return (
        <div>
            <Header />
        <div className="container mt-5 ">
            
            <div className="display-5 text-center">Sign Up</div>
            <form className="form-action mt-3" onSubmit={handleformSubmit}>
            <div className="mb-3">
                 <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" onInput={(e)=>{
                    if (!user.email) user.email={}
                    user.email=e.target.value;
                    setuser(user);
                }} 
                    className="form-control" id="email" name="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                 <label htmlFor="username" className="form-label">User Name</label>
                <input type="text" onInput={(e)=>{
                    if (!user.username) user.username={}
                    user.username=e.target.value;
                    setuser(user);
                }} className="form-control" id="username" name="username"  placeholder="User Name"/>
            </div>
            <div className="mb-3">
                 <label htmlFor="current-password" className="form-label">Password</label>
                <input type="current-password" onInput={(e)=>{
                    if (!user.password) user.password={}
                    user.password=e.target.value;
                    setuser(user);
                }} className="form-control" name="current-password"  placeholder="password"/>
            </div>
            <div className="row">
            <div className="col-6 mb-3">
                 <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text" onInput={(e)=>{
                    if (!user.firstname) user.firstname={}
                    user.firstname=e.target.value;
                    setuser(user);
                }} className="form-control" name="fname"  placeholder="First Name"/>
            </div>
            <div className="col-6 mb-3">
                 <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text" onInput={(e)=>{
                    if (!user.lastname) user.lastname={}
                    user.lastname=e.target.value;
                    setuser(user);
                }} className="form-control" name="lname"  placeholder="Last Name"/>
            </div>
            </div>
            <div className="row">
            <div className="col-4 mb-3">
                 <label htmlFor="dnum" className="form-label">Door Number</label>
                <input type="text" onInput={(e)=>{
                    if (!user.address.number) user.address.number={}
                    user.address.number=e.target.value;
                    setuser(user);
                }} className="form-control" name="dnum"  placeholder="Door Number"/>
            </div>
            <div className="col-8 mb-3">
                 <label htmlFor="street" className="form-label">Street</label>
                <input type="text" onInput={(e)=>{
                    if (!user.address.street) user.address.street={}
                    user.address.street=e.target.value;
                    setuser(user);
                }} className="form-control" name="street"  placeholder="Street"/>
            </div>
            <div className="col-4 mb-3">
                 <label htmlFor="city" className="form-label">City</label>
                <input type="text" onInput={(e)=>{
                    if (!user.address.city) user.address.city={}
                    user.address.city=e.target.value;
                    setuser(user);
                }} className="form-control" name="city"  placeholder="City"/>
            </div>
            <div className="col-4 mb-3">
                 <label htmlFor="zipcode" className="form-label">Zip code</label>
                <input type="Number" onInput={(e)=>{
                    if (!user.address.zipcode) user.address.zipcode={}
                    user.address.zipcode=e.target.value;
                    setuser(user);
                }} className="form-control" name="zipcode"  placeholder="Zipcode"/>
            </div>
            <div className="col-4 mb-3">
                 <label htmlFor="mobile" className="form-label">Contact Number</label>
                <input type="tel" onInput={(e)=>{
                    if (!user.phone) user.phone={}
                    user.phone=e.target.value;
                    setuser(user);
                }} className="form-control" name="mobile"  placeholder="Contact" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
            </div>
            
            </div>
            <div className="text-center mt-3">
               <button type="submit"   className="btn btn-outline-primary ">Submit</button>
            </div>
            </form>

            
        </div>

        <Footer />
        </div>
        
    )


} 

export default Signup;