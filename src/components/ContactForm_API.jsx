import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !message) {
      setError('Please fill in all fields.');
      setSuccess(false);
      return;
    }

    try {
      const response = await fetch('../../api/storeRequest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setError('');
        setSuccess(true);
        setEmail('');
        setMessage('');
      } else {
        setError('Failed to submit your request. Please try again.');
        setSuccess(false);
      }
    } catch (err) {
      console.error('Error submitting the form:', err);
      setError('An error occurred. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container d-flex align-items-center justify-content-between flex-wrap">
        {/* Form Section */}
        <div className="contact-form-container flex-grow-1 me-4">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Drop us a message below.</p>
          <form onSubmit={handleSubmit}>
            {error && <p className="contact-feedback error">{error}</p>}
            {success && <p className="contact-feedback success">Thanks! We'll get back to you shortly.</p>}

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Image Section */}
        <div className="contact-image-container">
          <img
            src="/images/Contact.jpg"
            alt="Contact Us"
            className="rounded-lg shadow-lg contact-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
