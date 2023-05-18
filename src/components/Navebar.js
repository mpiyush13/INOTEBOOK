import React,{useEffect} from 'react'
import { Link,useLocation,useNavigate} from 'react-router-dom'

export const Navebar = () => {
  let naviget=useNavigate()
  const logouthandle=()=>{
    localStorage.removeItem('token')
    naviget("/login")
  }
    let loc=useLocation()
    // useEffect(()=>{
    //     console.log(loc.pathname)
    //     console.log("piyush maurya")
    // },[loc])
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link
     className={`nav-link ${loc.pathname==="/"? "active":""}`} to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link
     className={`nav-link ${loc.pathname==="/about"?"active":""}`} to="/about">About</Link>
        </li>
       
       
      </ul>
      {!localStorage.getItem('token')?<form className="form-inline my-2 my-lg-0">
       
      <Link class="btn btn-primary mx-2" to="/login" role="button">Login</Link>
      <Link class="btn btn-primary " to="/sinup" role="button">Sinup</Link>
      </form>:<button className='btn btn-primary' onClick={logouthandle}>Logout</button>}
    </div>
  </nav>
  )
}
