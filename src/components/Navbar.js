import React, { useState } from 'react'
import Modal from '../Modal';
import { Link,useNavigate } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import Cart from '../screens/Cart';
import { useCart } from './contextReducer';
import "./Navbar.css"
export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
const navigate = useNavigate();
const handleLogout = () => {
localStorage.removeItem('authtoken');
navigate('/')
}

  return (
    <div>
      <style>
        {`
          .navbar-custom {
            background-color: #339966; /* Replace with any hex color you want */
          }
          .navbar-custom .navbar-brand,
          .navbar-custom {
            color: #ffffff; /* This will make the text color white */
          }
          .nav-link {
            color:#d2d2d4;
          }
          .my-badge {
            color: white;
            background-color: red;
            /* Add more CSS properties as needed */
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 fst-italic" to="http://localhost:3000/Home2">Maniac</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mt-1">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home2" style={{fontSize:"18px",color:"#ffffff"}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{fontSize:"18px",color:"#ffffff"}}>Menu</Link>
              </li>
              {(localStorage.getItem('authtoken'))?
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/myOrder" style={{fontSize:"18px",color:"#ffffff"}}>My Orders</Link>
            </li>
            :""}
                <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/feedback" style={{fontSize:"18px",color:"#ffffff"}}>Feedback</Link>
    </li>
            </ul>
            {(!localStorage.getItem('authtoken'))?
            <div className='d-flex'>
                <Link className="btn mx-1" to="/login" style={{backgroundColor: "#ffffff", color:"#339966"}}><b>Login</b></Link>
                <Link className="btn mx-1" to="/createuser" style={{backgroundColor: "#ffffff",color:"#339966"}}><b>SignUp</b></Link>
            
            </div>
            :<div>
            <div className='btn mx-2'style={{backgroundColor: "#ffffff", color:"#339966"}} onClick={()=>{setCartView(true)}}>
              <b>My Cart {" "}</b>
              <Badge pill bg="success" className='my-badge'>{data.length}</Badge>
              </div>
              {cartView? <Modal onClose={()=>setCartView(false)} ><Cart /> </Modal>:null}
            <div className='btn mx-2'style={{backgroundColor: "#ffffff", color:"#c70808"}} onClick={handleLogout}><b>Logout</b></div>
            </div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}