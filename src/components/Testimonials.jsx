import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const testimonials = [
    {
      text: "It has been a truly rewarding experience working with Murat on this project. Murat has consistently exceeded expectations, delivering high-quality work. His expertise in blockchain technology is evident in the seamless integration and functionality of the front-end components he developed, which have significantly enhanced our platform's user experience.",
      author: "- Blockchain Tech Client",
      rating: 5,
    },
    {
      text: "Murat is a genius guy. He knows very well what he is doing. He is a real senior Developer. I'm Shocked by the delivery speed and Detailed level of quality work that he delivered to me in 2 days. Just hire Murat; you won't regret it for sure. Murat understands requirements very, very clearly. Thanks, saviour",
      author: "- MERN Stack Project Client",
      rating: 5,
    },
    {
      text: "Work was done fast and professionally as I required. Communication was clear and polite. Great value for the money. Will hire again if needed.",
      author: "- NFT Project Client",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
