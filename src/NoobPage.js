import React, { useState, useEffect } from 'react';
import img80 from './assetnoob/img80.jpg';
import img81 from './assetnoob/img81.jpg';
import img82 from './assetnoob/img82.jpg';
import img83 from './assetnoob/img83.jpg';
import img84 from './assetnoob/img84.jpg';
import img85 from './assetnoob/img85.jpg';
import img86 from './assetnoob/img86.jpg';

function NoobPage() {
  // Array of images to repeat in the loop
  const imageSources = [img80, img81, img82, img83, img84, img85, img86];

  const [images, setImages] = useState([]);

  // Effect to add new images repeatedly with random positions and delays
  useEffect(() => {
    let index = 0;
    
    const interval = setInterval(() => {
      setImages((prevImages) => [
        ...prevImages,
        {
          src: imageSources[index],
          style: {
            top: `${Math.random() * 90}%`, // Random position on the Y-axis
            left: `${Math.random() * 90}%`, // Random position on the X-axis
          },
        },
      ]);
      
      // Update index to cycle through images repeatedly
      index = (index + 1) % imageSources.length;
    }, 500); // Adds a new image every 500ms

    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Centered text */}
      <div
        style={{
          color: '#39FF14', // Neon green color
          fontSize: '3rem',
          zIndex: 1,
        }}
      >
        U ARE A FAGGOT
      </div>

      {/* Images with random positioning and delayed fade-in effect */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`Decoration ${index}`}
          style={{
            position: 'absolute',
            width: '5cm',
            height: '5cm',
            opacity: 0,
            animation: `fadeIn 1s ease forwards`, // Fade-in animation
            animationDelay: `${index * 0.5}s`, // Delay for each image
            ...image.style,
          }}
        />
      ))}

      {/* CSS for fade-in animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default NoobPage;
