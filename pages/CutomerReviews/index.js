import React, { useState } from 'react';

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'Haresh',
      title: 'Great Service',
      rating: 5,
      comment: 'I love this cabs service! It is very affordable.',
    },
    {
      name: 'Dev',
      title: 'Excellent Service',
      rating: 4,
      comment: 'The customer service was great, and they answered all my questions.',
    },
    {
      name: 'Mamta',
      title: 'Average Experience',
      rating: 3,
      comment: 'The cab service is okay, but it could be improved.',
    },
    {
      name: 'Divyesh',
      title: 'Satisfied',
      rating: 4,
      comment: 'I had a good experience with this service. It did meet my expectations.',
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    title: '',
    rating: 5,
    comment: '',
  });

  // Function to add a new review
  const addReview = () => {
    // Check if there are already 5 reviews, and trim the oldest one
    if (reviews.length === 5) {
      setReviews(reviews.slice(1));
    }
    setReviews([...reviews, newReview]);
    // Reset the form fields
    setNewReview({
        name: '',
        title: '',
        rating: 5,
        comment: '',
    });
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'rating') {
      // Ensure the rating is no more than 5
      const rating = parseInt(value, 10);
      if (!isNaN(rating) && rating >= 1 && rating <= 5) {
        setNewReview({ ...newReview, [name]: rating });
      }
    } else {
      setNewReview({ ...newReview, [name]: value });
    }
  };

  return (
        <>
      <div id="cars" className="rent-mainContainer">
      <div className="rent-container">
        <div className="rent-title">
          <p>Top 4 Customer</p>
          <h1>Reviews</h1>
        </div>
        <ul className="rent-cards">
          {reviews.map((review, index) => (
            <li key={index} className="rent-card rent-description">
              <h1>Name: {review.name}</h1>
              <h2>{review.title}</h2>
              <p>Rating: {review.rating}</p>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
        
      </div>
      
    </div>
    <div id="form" className="form-mainContainer">
    <div className="form-container"> 
    <div className="form-title">
                <p>Give your </p>
                <h1>Review</h1>
              </div>
              <div className="form-content">

              
                <div className="form-form">
      <form>
         
          <div className="form-input">
          <input
                        type="text"
                        placeholder='Your Name'
                        id="name"
                        name="name"
                        value={newReview.name}
                        onChange={handleInputChange}
                      />
           
          
          
            
            <input
              type="text"
              placeholder='Title'
              id="title"
              name="title"
              value={newReview.title}
              onChange={handleInputChange}
              />
          
          
            
            <input
              type="number"
              id="rating"
              placeholder='Rating'
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              />
         
          
           
            <textarea
              id="comment"
              placeholder='Comment'
              name="comment"
              value={newReview.comment}
              onChange={handleInputChange}
              />
          
          
              </div>
          <div className="form-submit">
          <button type="button" onClick={addReview}>
            Add Review
          </button>
        </div>
        </form>
        </div></div>
        </div>
      </div>
  </>
  );
};

export default CustomerReviews;
