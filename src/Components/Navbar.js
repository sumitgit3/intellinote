import React from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'
const NavBar = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('authToken');
    navigate('/login');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">IntelliNote</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
              </li>
            </ul>
            {!localStorage.getItem('authToken')?
              <>
              <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
              <Link className="btn btn-primary" to="/signup" role="button">Signup</Link>
              </>
              :<button className='btn btn-primary' onClick={handleLogout}>Logout</button>
            }
          </div>
        </div>
      </nav>

    </div>
  )

}
export default NavBar