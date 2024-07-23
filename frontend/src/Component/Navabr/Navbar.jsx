import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div style={{borderBottom:"1px solid white"}} >
   <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container" >
    <a className="navbar-brand text-white" href="#" >Books Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    <Link to='/'>    <li className="nav-item">
          <a className="nav-link active text-white navv" aria-current="page" href="#">Home</a>
        </li></Link>
   <Link to='/books'>     <li className="nav-item">
          <a className="nav-link text-white navv" href="#">View Books</a>
        </li></Link>
      <Link to='/addBooks'>  <li className="nav-item">
          <a className="nav-link text-white navv" href="#">Add Book</a>
        </li></Link>
       
        
      </ul>
      
    </div>
  </div>
</nav>
</div>
   </>
  )
}

export default Navbar