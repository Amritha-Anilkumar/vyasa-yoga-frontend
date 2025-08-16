import React, { useState } from 'react';
import './SimpleForm.css';
import { API_URL } from "../api";

function SimpleForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preference: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/register/`, { // ✅ store response
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fname: formData.firstName,
          lname: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          preference: formData.preference,
        }),
      });

      if (response.ok) {
        alert('Form submitted!');
        setSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          preference: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          alert('Submission failed: ' + JSON.stringify(errorData));
        } else {
          const errorText = await response.text();
          console.error('HTML Error:', errorText);
          alert('Server error. Not JSON. Check backend response.');
        }
      }
    } catch (error) {
      alert('Something went wrong: ' + error.message);
    }
  };

  return (
    <div className="simple-form">
      <h1>🌸 Contact Form</h1>
      <form onSubmit={handleSubmit}>
        {['firstName', 'lastName', 'email', 'phone'].map((field) => (
          <div key={field} className="input-group">
            <label className="input-label">
              {field === 'firstName' && 'First Name'}
              {field === 'lastName' && 'Last Name'}
              {field === 'email' && 'Email'}
              {field === 'phone' && 'Phone Number'}
            </label>
            <input
              type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="form-input"
              required
              onFocus={(e) => (e.target.style.border = '2px solid #ce93d8')}
              onBlur={(e) => (e.target.style.border = '2px solid #f48fb1')}
            />
          </div>
        ))}
        <div className="input-group">
          <label className="input-label">Preference</label>
          <select
            name="preference"
            value={formData.preference}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="" disabled>Select your yoga preference</option>
            {[
              'Yoga for Stress Relief',
              'Gentle Yoga for Beginners',
              'Yoga for Senior Citizens',
              'Parent & Child Yoga',
              'Yoga for Pregnancy',
              'Therapeutic Yoga',
              'Pranayama & Breathwork',
              'Meditation & Mindfulness',
              'Chakra Balancing Yoga',
              'Traditional Hatha Yoga',
              'Advanced Asana Practice',
              'Kids Yoga',
            ].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
      {submitted && (
        <div className="thank-you">
          Thank you! We will contact you as soon as possible.
        </div>
      )}
    </div>
  );
}

export default SimpleForm;
