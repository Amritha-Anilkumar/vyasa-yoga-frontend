import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Yogacourse.css'; 

const courses = [
  {
    image: '/yoga10.webp',
    title: '100 Hour Yoga Course',
    duration: '14 Days | Start on 10th Every Month',
    location: 'Calicut',
  },
  {
    image: '/yoga12.jpg',
    title: '200 Hour Yoga Course',
    duration: '14 Days | Start on 10th Every Month',
    location: 'Calicut',
  },
  {
    image: '/yoga13.jpeg',
    title: '300 Hour Yoga Course',
    duration: '14 Days | Start on 10th Every Month',
    location: 'Calicut',
  },
   {
    image: '/parent.jpg',
    title: 'Parent & Child Yoga',
    duration: 'Start on 10th Every Month',
    location: 'Calicut',
  },
   {
    image: '/pregnent.jpeg',
    title: 'Yoga for Pregnency',
    duration: 'Start on 10th Every Month',
    location: 'Calicut',
  },
    {
    image: '/gallery22.webp',
    title: ' Yoga for Old People',
    duration: 'Start on 10th Every Month',
    location: 'Calicut',
  },
  
];

function YogaCourses() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <div className="row g-4">
        <h2>UpComing Courses</h2>
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

export default YogaCourses;
