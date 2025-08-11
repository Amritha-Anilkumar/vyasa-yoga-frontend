import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Connection() {
  const headingStyle = {
    textAlign: 'center',
    marginTop: '1.5rem',
    color: '#ad1457',
    fontSize: '2rem',
    fontWeight: 'bold',

  };
  const subheadingStyle={
    
    color:'red',
    
 
   

  }

  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img className="d-block w-100" src="/yoga44.jpg" alt="Yoga Pose" />

        <div className="container mt-4">
          <h2 style={headingStyle}>Contact Detail</h2>

          <div className="row mt-3">
            <div className="col-md-6 text-start">
              <h3 style={subheadingStyle}>Phone: +91 9047859944</h3>
              <h3 style={subheadingStyle}>Location (Main Branch):Calicut</h3>
              <h3 style={subheadingStyle} >Time:9.30-5.30</h3>
              <h3 style={subheadingStyle}>Email:vyasayogacenter@gmail.com</h3>
            </div>
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250437.1231416679!2d75.64633444225565!3d11.255521654831767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1751523527616!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Connection;
