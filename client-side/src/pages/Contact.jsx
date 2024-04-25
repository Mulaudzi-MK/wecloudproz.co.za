import React, { useState } from "react";
import "../styles/contact.css";
import Spline from "@splinetool/react-spline";
import axios from 'axios';

// Define the component
const Contact = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the server using Axios
      await axios.post('http://localhost:5000/submit-form', formData); // Adjusted URL for server-side endpoint
      alert('Message sent successfully!');
      // Clear form fields after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message. Please try again later.');
    }
  };

  // Handler for input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Render the form
  return (
    <section style={{"background": "black"}} className="contact_content">
        <div className="contact_bg">
            <Spline scene="https://prod.spline.design/WgXRrkQwYoFJrT5M/scene.splinecode"/>
        </div>
    <h1>SEND US A MESSAGE WE WILL GET YOU THERE. WE <span style={{"color":"rgb(66, 152, 202)", "fontSize": "40px"}}>C</span>LOUD PRO </h1>

    <div className="form_contact"> 
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button className="contact_us_btn" type="submit">Send Message</button>
    </form>      
    </div>

    </section>
  );
};

// Export the component
export default Contact;
