import React, { useState } from 'react';
import './Contactus.css';
import axios from 'axios';

export default function Contactus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, phone, suggestions };
    axios.post('http://localhost:3001/api/contactus', userData) // Changed the endpoint URL
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <div className="form-box" id="feedback-main">
        <h1 style={{ textAlign: "center" }}>Maniac</h1>
        <div className="textup">
          <i className="fa fa-solid fa-clock"></i>
          It only takes two minutes!!
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="uname">
            <i className="fa fa-solid fa-user"></i>
            Name
          </label>
          <input type="text" id="uname" name="name" required className="Name" onChange={(e) => setName(e.target.value)} />

          <label htmlFor="email">
            <i className="fa fa-solid fa-envelope"></i>
            Email Address
          </label>
          <input className="Email" value={email} type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="phone">
            <i className="fa fa-solid fa-phone"></i>
            Phone No
          </label>
          <input className="Phone" value={phone} type="tel" id="phone" name="phone" required onChange={(e) => setPhone(e.target.value)} />

          <label>
            <i className="fa fa-solid fa-face-smile"></i>
            Do you satisfy with our service?
          </label>
          <div className="radio-group">
            <input type="radio" id="yes2" name="satisfy2" value="yes" defaultChecked />
            <label htmlFor="yes2">Yes</label>

            <input type="radio" id="no2" name="satisfy2" value="no" />
            <label htmlFor="no2">No</label>
          </div>

          <label htmlFor="msg">
            <i className="fa fa-solid fa-comments" style={{ marginRight: "3px" }}></i>
            Write your Suggestions:
          </label>
          <textarea className="suggestions" id="msg" name="msg" rows="4" cols="10" required onChange={(e) => setSuggestions(e.target.value)}></textarea>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}




