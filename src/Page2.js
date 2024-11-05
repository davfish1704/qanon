import React, { useEffect, useState } from 'react';
import './App.css';
import newBackground from './assets/new_background.jpg';
import img4 from './assets/img4.jpg';
import img20 from './assets/img20.jpg';
import img21 from './assets/img21.jpg';
import img22 from './assets/img22.jpg';
import img23 from './assets/img23.jpg';
import img24 from './assets/img24.jpg';
import img26 from './assets/img26.jpg';
import img30 from './assets/img30.jpg';
import img40 from './assets/img40.jpg';
import vid1 from './assets/vid1.mp4';

function Page2() {
  const [text, setText] = useState('');
  const fullText = 'wake up neo';
  const [subText, setSubText] = useState('');
  const subFullText = 'didn’t u had enough?';

  // Typing effect for text
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        let subIndex = 0;
        const subTypingInterval = setInterval(() => {
          if (subIndex < subFullText.length) {
            setSubText(subFullText.slice(0, subIndex + 1));
            subIndex++;
          } else {
            clearInterval(subTypingInterval);
          }
        }, 150);
      }
    }, 150);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div
      className="Page2"
      style={{
        backgroundImage: `url(${newBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* "wake up neo" text with typing effect, centered at the top */}
      <h1 
        className="wake-up-title"
        style={{
          fontFamily: 'monospace',
          color: '#39ff14',
          position: 'absolute',
          top: '2%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '3rem',
        }}
      >
        {text}
      </h1>
      
      {/* Centered sub-title, 5cm closer to "wake up neo" */}
      <h2
        className="sub-title"
        style={{
          fontFamily: 'monospace',
          color: '#39ff14',
          position: 'absolute',
          top: 'calc(2% + 5cm)',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '3rem',
        }}
      >
        {subText}
      </h2>

      {/* Video positioned 5cm closer to "wake up neo" */}
      <video
        src={vid1}
        type="video/mp4"
        controls preload="auto" muted autoPlay loop
        style={{
          position: 'absolute',
          top: 'calc(2% + 10cm)',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '20cm',
          height: '11cm',
        }}
      />

      {/* White "FIGHT" text centered 5 cm higher */}
      <h1
        style={{
          position: 'absolute',
          top: '25cm', // 5 cm higher than previous
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '5rem',
          color: 'white',
          fontFamily: 'monospace',
        }}
      >
        FIGHT
      </h1>

      {/* Left image (img40) - immediate display */}
      <img
        src={img40}
        alt="img40"
        style={{
          position: 'absolute',
          top: '3cm',
          left: '3cm',
          width: '6cm',
          height: '6cm',
        }}
      />

      {/* Right image (img30) - immediate display */}
      <img
        src={img30}
        alt="img30"
        style={{
          position: 'absolute',
          top: '9cm',
          right: '5cm',
          width: '6cm',
          height: '6cm',
        }}
      />

      {/* Additional images with fixed positions and delayed appearance */}
      {[img20, img21, img22, img23, img24, img26].map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`image${index}`}
          style={{
            position: 'absolute',
            width: '5cm',
            height: '5cm',
            opacity: 0,
            animation: `fadeIn 1s ease forwards`,
            animationDelay: `${index * 0.5}s`,
            ...[
              { top: '15cm', left: '10cm' },       // img20
              { top: '20cm', left: '33cm' },       // img21, moved 3 cm to the right
              { top: '18cm', left: '5cm' },        // img22 - positioned on the left
              { top: '25cm', left: '10cm' },       // img23
              { top: '30cm', left: '20cm' },       // img24
              { top: '28cm', left: '5cm' },        // img26 - positioned on the left
            ][index], // Fixed positions for each image
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

export default Page2;
