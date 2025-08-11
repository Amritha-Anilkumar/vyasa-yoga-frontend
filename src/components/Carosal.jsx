import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carosal.css'; 
import { useNavigate } from 'react-router-dom';

function Carosal() {
   const navigate = useNavigate();
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/yoga1.jpg"
          alt="Yoga Pose"
        />
        <div className="custom-caption">
          <h6>WELCOME TO Vyasa</h6>
        <h1>Breathe in peace<br />Breathe out stress<br />Begin again</h1>

          <button className="discover-btn" onClick={() => navigate('/join')}>Join Now</button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosal;
