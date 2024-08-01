import React, { useState } from 'react';
import './CustomerFeedback.css'; // Import the CSS file
import SmileyRating from '../SmileyRating/SmileyRating';

export const CustomerFeedback = () => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission (e.g., send to backend)
    console.log({ rating, comments });
    setSubmitted(true);
  };

  return (
    <div className="customer-feedback">
     
      <br/>
      {submitted ? (
        <p className='thank-you'><center>Thank you for your feedback!</center></p>
      ) : (
        <div className="box-component">
           <h1><center>Customer Feedback</center></h1>
          <center>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              {/* Render the SmileyRating component */}
              <SmileyRating />
            </div>
            <div className="form-group">
              <label>Comments:</label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Enter your comments here..."
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          </center>
        </div>
      )}
    </div>
  );
};

export default CustomerFeedback;
