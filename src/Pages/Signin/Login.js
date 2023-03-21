import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import './Login.css'

function Login(){

    return (
        <div>
            <Header />
            <div className="container cli mt-5">
            <div className="display-5 fw-bold text-center">Log in</div>
                <form className="d-flex flex-column align-items-center mt-5 ">

                <label htmlFor="email" className="form-label text-end fw-bold ">Email address</label>
                <input type="email" className="form-control w-50" id="email" name="email" placeholder="name@example.com" required/>
                <label htmlFor="password" className="form-label mt-3 fw-bold">Password</label>
                <input type="password"  className="form-control w-50" name="password" required placeholder="password"/>

                </form>

            </div>

            <Footer />
        </div>
    )

}

export default Login;