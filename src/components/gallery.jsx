import React, { useEffect, useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/gallery/')
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="gallery-container">
      {images.map((img) => (
        <div key={img.id} className="gallery-item">
          <img
            src={`http://127.0.0.1:8000${img.image}`}
            alt={img.title || `Image ${img.id}`}
            className="gallery-img"
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
