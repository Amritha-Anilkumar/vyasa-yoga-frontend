import React, { useEffect, useState } from 'react';
import { API_URL } from "../api";
import './TeacherList.css';  

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/teachers/`)
      .then((res) => res.json())
      .then((data) => setTeachers(data))
      .catch((err) => console.error("Teacher fetch error:", err));
  }, []);

  return (
    <div className="teacher-section">
      {teachers.map((teacher) => (
        <div key={teacher.id} className="teacher-card">
          <img src={teacher.photo} alt={teacher.name} className="teacher-photo" /> 
          <h3 className="teacher-name">{teacher.name}</h3>
          <p className="teacher-specialization">{teacher.specialization}</p>
        </div>
      ))}
    </div>
  );
}

export default TeacherList;
