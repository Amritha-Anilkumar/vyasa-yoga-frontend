import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Yogacourse.css'; 

const courses = [
  {
    image: '/yogab.webp',
    title: 'Yoga for Stress Relief & Calm',
    Date: 'Start on 10th Every Month',
    location: ' Calicut',
  },
  {
    image: '/yogabb.webp',
    title: 'Gentle Yoga for Beginners',
    Date: 'Start on 10th Every Month',
    location: 'Calicut',
    
  },
  {
    image: '/yogaol.webp',
    title: 'Yoga for Senior Citizens',
    Date: 'Start on 10th Every Month',
    location: 'Calicut',
    
  },
   {
    image: '/yogap&c.jpg',
    title: 'Parent & Child Yoga',
    Date: 'Start on 10th Every Month',
    location: 'Calicut',
  },
   {
    image: '/yogapreg.jpg',
    title: 'Yoga for Pregnancy',
    Date: 'Start on 10th Every Month',
    location: 'Calicut',
  },
    {
    image: '/yogat.jpg',
    title: ' Therapeutic Yoga',
    Date: 'Start on 10th Every Month',
    location: 'Calicut',
  },
    {
    image: '/yogaprana.webp',
    title: ' Pranayama & Breathwork',
    Date: 'Start on 10th Every Month',
    location: 'Calicut',
  },
  {
    image: '/yogamind.jpg',
    title: ' Meditation & Mindfulness',
    Date: 'Start on 10th Every Month',
    location: 'Calicut',
  },
   {
    image: '/yogabalance.webp',
    title: ' Chakra Balancing Yoga',
    Date: 'Start on 10th Every Month',
    location: 'Calicut',
  },
   {
    image: '/yogahath.webp',
    title: ' Traditional Hatha Yoga',
    Date: 'Start on 10th Every Month',
    location: 'Calicut',
  },
   {
    image: '/yogaasa.jpg',
    title: ' Advanced Asana Practice',
    Date: 'Start on 10th Every Month',
    location: 'Calicut',
   
  },
  {
    image: '/yogalids.webp',
    title: ' Kids Yoga',
    Date: 'Start on 10th Every Month',
    location: 'Calicut',
  },
  
];

function Yoga() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <div className="row g-4">
        <h2>Our Classes</h2>
        <h6> We are open to all age groups. We offer special programs tailored to meet the unique needs of each stage of life</h6>
        {courses.map((course, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={course.image} className="card-img-top" alt={course.title} />
              <div className="card-body">
                <p className="text-muted mb-1" style={{ fontSize: '0.9rem' }}>{course.duration}</p>
                <h5 className="card-title">{course.title} <br /> {course.location}</h5>
                <button className="btn btn-outline-primary w-100" onClick={() => navigate('/join')}>
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Yoga;
