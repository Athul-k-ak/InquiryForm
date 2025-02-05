import React from "react";
import "../styles/styles.css"; // Importing global styles

const ThankYou = ({ data }) => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <h2 className="thank-you-heading">🎉 Thank You for Your Inquiry! 🎉</h2>
        <p className="thank-you-text">We appreciate your interest. Here are the details you submitted:</p>

        <div className="thank-you-details">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Message:</strong> {data.message}</p>
        </div>

        <a href="/" className="home-button">Back to Home</a>
      </div>
    </div>
  );
};

export default ThankYou;
