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

  const subheadingStyle = {
    color: 'red',
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem',
  };

  const colStyle = {
    flex: '1 1 300px',
    padding: '1rem',
  };

  const iframeStyle = {
    width: '100%',
    height: '300px',
    border: 0,
  };

  // Media query inline for small screens
  const responsiveHeading = {
    fontSize: window.innerWidth < 768 ? '1.5rem' : '2rem',
  };

  const responsiveSubheading = {
    fontSize: window.innerWidth < 768 ? '1rem' : '1.2rem',
  };

  const responsiveIframe = {
    width: '100%',
    height: window.innerWidth < 768 ? '200px' : '300px',
    border: 0,
  };

  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/yoga44.jpg"
          alt="Yoga Pose"
          style={{ objectFit: 'cover', maxHeight: '500px', width: '100%' }}
        />

        <div style={containerStyle}>
          <h2 style={{ ...headingStyle, ...responsiveHeading }}>Contact Detail</h2>

          <div style={rowStyle}>
            <div style={colStyle}>
              <h3 style={{ ...subheadingStyle, ...responsiveSubheading }}>Phone: +91 9047859944</h3>
              <h3 style={{ ...subheadingStyle, ...responsiveSubheading }}>Location (Main Branch): Calicut</h3>
              <h3 style={{ ...subheadingStyle, ...responsiveSubheading }}>Time: 9.30-5.30</h3>
              <h3 style={{ ...subheadingStyle, ...responsiveSubheading }}>Email: vyasayogacenter@gmail.com</h3>
            </div>
            <div style={colStyle}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250437.1231416679!2d75.64633444225565!3d11.255521654831767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1751523527616!5m2!1sen!2sin"
                style={responsiveIframe}
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
