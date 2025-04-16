import React from "react";

function TestimonialCard({ testimonial }) {
  const renderStars = (rating) => {
    return "★".repeat(rating);
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">
        {renderStars(testimonial.rating)}
      </div>
      <p className="testimonial-text">"{testimonial.text}"</p>
      <p className="testimonial-author">{testimonial.author}</p>
    </div>
  );
}

export default TestimonialCard;
