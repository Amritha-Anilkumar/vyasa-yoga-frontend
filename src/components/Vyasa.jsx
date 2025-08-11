import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Vyasa() {
  const paragraphStyle = {
    textAlign: 'justify',
    padding: '2rem',
    color: '#4a148c',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    marginTop: '-4px',
    lineHeight: '1.7',
  };

  const headingStyle = {
    textAlign: 'center',
    marginTop: '1.5rem',
    color: '#ad1457',
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/about.jpg"
          alt="Yoga Pose"
        />

        <div>
          <h1 style={headingStyle}>
            Welcome to <span style={{ color: '#6a1b9a' }}>Vyasa</span> Yoga Center
          </h1>
          <p style={paragraphStyle}>
            <strong>Vyasa Yoga Center</strong> is more than just a place to practice yoga — it is a peaceful haven for
            those who seek balance, strength, healing, and a deeper connection to themselves. Inspired by the wisdom of
            Sage Vyasa, our center blends traditional yogic values with a modern, inclusive approach to wellness.
            <br /><br />
            We started our journey over <strong>20 years ago</strong>, spreading the light of yoga across <strong>Calicut</strong>.
            With dedication and love, we've grown into a trusted space for thousands of students, practitioners, and families who
            have embraced yoga as a way of life. Our legacy continues to expand with each breath and every mindful movement.
            <br /><br />
            Nestled in a serene environment away from the noise and chaos of everyday life, Vyasa offers a space where
            you can breathe deeply, stretch freely, and grow spiritually. Our classes are designed for everyone —
            whether you’re taking your first steps on the mat or continuing a lifelong practice.
            <br /><br />
            We offer a wide range of programs including Hatha Yoga, Ashtanga Vinyasa, Restorative Yoga, Pranayama
            (breathing techniques), Meditation, and Yoga Nidra. Each session is guided by our certified instructors who
            bring not only expertise but compassion, mindfulness, and deep-rooted yogic philosophy into every class.
            <br /><br />
            <strong>We offer yoga classes for all age groups.</strong> Our special programs include:
            <ul>
              <li>Yoga for Pregnancy</li>
              <li>Parent & Child Yoga</li>
              <li>Yoga for Senior Citizens</li>
              <li>Therapeutic Yoga</li>
              <li>Gentle Yoga for Beginners</li>
              <li>Yoga for Stress Relief</li>
              <li>Pranayama & Breathwork</li>
              <li>Meditation & Mindfulness</li>
              <li>Chakra Balancing Yoga</li>
              <li>Traditional Hatha Yoga</li>
              <li>Advanced Asana Practice</li>
              <li>Kids Yoga</li>
            </ul>
            Each class is thoughtfully crafted to meet the physical, emotional, and spiritual needs of the group it serves.
            <br /><br />
            At Vyasa, we believe that yoga is not just a physical exercise, but a way of life — a journey toward inner
            peace, emotional clarity, and self-transformation. Whether your goal is to build flexibility, find stillness
            in your mind, recover from stress, or embrace a more conscious lifestyle, we are here to support and inspire
            you.
            <br /><br />
            Join our growing community where souls align, energies heal, and hearts open. Experience the magic of
            self-discovery. Experience <strong>Vyasa Yoga Center</strong>.
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Vyasa;
