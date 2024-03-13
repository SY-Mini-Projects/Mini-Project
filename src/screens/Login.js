import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
export default function Login() {
  const [credentials, setCredentials] = useState({email:"",password:""})
const navigate = useNavigate();

const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: credentials.email,
            password: credentials.password
        })
    });
    const json = await response.json();
    console.log(json);

    if(!json.success){
        alert('Enter Correct Credentials')
    }
    if(json.success){
      localStorage.setItem('authtoken',json.authToken)
      localStorage.getItem('authtoken')
        navigate('/')
    }
};

const onchange = (e) => {
    setCredentials({...credentials,[e.target.name]:e.target.value})
}
  return (
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <div>
        <Navbar/>
        </div>
    
      <div className="container">
<form className='w-50 m-auto mt-5 border border-success rounded' style={{ backgroundColor: '#3b3737' }} onSubmit={handleSubmit}>
  <div className="m-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onchange} id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/createuser" className='m-3 mx-1 btn btn-danger'>New User</Link>
</form>

</div>
    </div>
  )
}
