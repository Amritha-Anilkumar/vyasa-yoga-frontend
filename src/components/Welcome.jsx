import React from 'react';
import './YogaSection.css'; 

function YogaSection() {
  return (
    <div className="yoga-section">
      <div className="yoga-images">
        <img src="/yoga4.webp" alt="Yoga Pose" />
      </div>
      <div className="yoga-description">
        <h1>Welcome to Vyasa</h1>
       
        <p className="quote">“Breathe deeply, move freely, and live mindfully.”</p>
        <p>
          At Vyasa, we believe yoga is more than just a practice — it's a journey toward peace, strength, and inner transformation.
          Our story began with a heartfelt desire to bring the healing power of yoga to people from all walks of life. Today, we’re a growing community grounded in mindfulness, self-discovery, and holistic wellness.
          
          Whether you’re stepping onto the mat for the first time or deepening an existing practice, Yogalife offers a nurturing space to reconnect with your body, quiet your mind, and uplift your spirit.
          
          We blend timeless yogic wisdom with a modern approach, offering classes, workshops, and retreats that support your growth — physically, mentally, and emotionally.
           
          Our instructors support you at every step, in a warm and welcoming space. 
          </p>
      </div>
    </div>
  );
}

export default YogaSection;
