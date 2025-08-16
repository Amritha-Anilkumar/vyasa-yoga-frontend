import React, { useEffect, useState } from 'react';
import './Gallery.css';
import { API_URL } from "../api";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/gallery/`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Gallery fetch error:", err));
  }, []);

  return (
    <div className="gallery-container">
      {images.map((img) => (
        <div key={img.id} className="gallery-item">
          <img
            src={img.image}  
            alt={img.title || `Image ${img.id}`}
            className="gallery-img"
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
