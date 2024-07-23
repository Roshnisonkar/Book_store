import React from 'react'
import "./Home.css"
import girl from '../../assests/img/gril.avif'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='Home-page bg-dark text-white container-fluid'>
        <div className="row container">
            <div className="col-lg-6 d-flex justify-content-center align-items-center align-items-lg-start flex-column" style={{height:"100vh"}}>
                <h2 style={{fontSize:"70px"}}>BOOK STORE FOR YOU</h2>
                <p  className='mb-0' style={{color:"silver"}}> Checkout The Books From Here.</p>
                <Link to='/books' className='viewbook my-3 '>View Books</Link>
            </div>
             <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column" style={{height:"91.5vh"}}>
                <img src={girl} alt="img" className='img-fluid homeimg' />
            </div>
        </div>
      
    </div>
  )
}

export default Home
