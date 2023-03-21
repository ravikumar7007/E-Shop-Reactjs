import './footer.css'

function Footer(){
    return(
        <div className=" bg-dark py-3 mt-5 text-white">
            <div className="container">
            <div >
                <div className="row ">
                    <div className="col">
                        <h6>About</h6>
                        <ul>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h6>Help</h6>
                        <ul>
                            <li>Payments</li>
                            <li>Orders</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h6>Policy</h6>
                        <ul>
                            <li>Terms and Conditions</li>
                            <li>Security</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h6>Social</h6>
                        <ul>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>

                </div>

            </div>
            <p className="text-center">© 2023 Shopway India</p>
            </div>
            
        </div>
    )
}


export default Footer;