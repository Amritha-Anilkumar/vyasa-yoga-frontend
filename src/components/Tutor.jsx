import React, { useEffect, useState } from 'react';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/teachers/`)
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div className="teacher-section" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {teachers.map((teacher) => (
        <div key={teacher.id} className="teacher-card" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
          <img
            src={`http://127.0.0.1:8000${teacher.photo}`}
            alt={teacher.name}
            style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <h3>{teacher.name}</h3>
          <p style={{ fontStyle: 'italic', color: '#555' }}>{teacher.specialization}</p>
        </div>
      ))}
    </div>
  );
}

export default TeacherList;
