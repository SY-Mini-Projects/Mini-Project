// FeedbackScreen.js
import React, { useState } from 'react';
import './Feedback.css';
import { useNavigate } from 'react-router-dom';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await fetch('http://localhost:5000/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: feedback.name,
        email: feedback.email,
        message: feedback.message
      })
    });
    const json = await response.json();
    console.log(json);
    setIsSubmitting(false);

    if (json.success) {
      // Clear the form
      setFeedback({ name: '', email: '', message: '' });
      alert('Feedback submitted successfully');
      navigate('/');
    } else {
      // Handle error
      alert('An error occurred while submitting your feedback');
    }
  };

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  return (
    <div className="feedback-page">
      <div className="background-color"></div>
      <div className="confetti"></div>
      <h1 className="feedback-text">Feedback</h1>
      <div className="feedback-container">
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input type="text" name="name" value={feedback.name} onChange={handleChange} placeholder="Name" required />
          <input type="email" name="email" value={feedback.email} onChange={handleChange} placeholder="Email" required />
          <textarea name="message" value={feedback.message} onChange={handleChange} placeholder="Message" required />
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackScreen;
