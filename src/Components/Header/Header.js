import { useContext,  } from "react";
import { Link } from "react-router-dom";
import contextApp from "../../context";


function Header(props){
   const{cartitem}=useContext(contextApp);
    

    return (
    <div className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className=" navbar-brand mb-2 align-self-center text-decoration-none nav-link" to='/'>
    <div ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentcolor" className="bi bi-handbag-fill" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"/></svg> &nbsp; Shopway</div>
    </Link>
        
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <div className="d-flex me-2" >
        <Link to='/cart'>
        <button type="button" className="btn btn-outline-light me-2">Carts   {cartitem.length>0 && <span class="badge text-bg-light">{cartitem.length}</span>} </button>
        </Link>
      <a href="/register"><button className="btn btn-outline-light me-2">Sign Up</button></a>
      <a href="/login"><button className="btn btn-outline-light" type="">Log in</button></a>  
      </div>
      <form className="d-flex" role="search">
      
      <input
         className="form-control me-2 text-dark" type="search"
        icon="search"
        placeholder="Search..."
        onChange={(e) => props.searchItems(e.target.value)}
      />
      </form>
    </div>
  </div>
</nav>
    </div>
    )
}

export default Header;