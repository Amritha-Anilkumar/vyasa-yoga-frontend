import React from 'react';
import './why.css'; 

function Why() {
  return (
    <div className="yoga-section">
      
      <div className="yoga-images">
        <img src="/yoga3.webp" alt="Yoga Pose" />
         <img src="/yoga2.jpg" alt="Yoga Pose" />
      </div>

     
      <div className="yoga-description">
        <h1>Why Choose Us</h1>

        <p>
          Reconnect with yourself through our thoughtfully designed yoga programs in the heart of Calicut — where the gentle rhythm of nature meets the timeless wisdom of ancient practice. Surrounded by lush greenery, peaceful backwaters, and the healing energy of God’s Own Country, our sessions offer a safe and supportive space for everyone — from complete beginners to seasoned practitioners. Each class invites you to slow down, breathe deeply, and move mindfully, allowing you to release stress, restore balance, and rediscover your inner calm.
        </p>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="text-center">
            <img src="/choose-1.png" alt="Students" className="mx-auto mb-2 w-8 h-8" />
            <h3 className="text-2xl font-bold">2146</h3>
            <p className="text-gray-500">Students</p>
          </div>
          <div className="text-center">
            <img src="/choose-2.png" alt="Experience" className="mx-auto mb-2 w-8 h-8" />
            <h3 className="text-2xl font-bold">20</h3>
            <p className="text-gray-500">Years Of Experience</p>
          </div>
          <div className="text-center">
            <img src="/choose-3.png" alt="Programs" className="mx-auto mb-2 w-8 h-8" />
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-gray-500">Programs</p>
          </div>
          <div className="text-center">
            <img src="/choose-4.png" alt="Trainers" className="mx-auto mb-2 w-8 h-8" />
            <h3 className="text-2xl font-bold">15</h3>
            <p className="text-gray-500">Certified Trainers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
