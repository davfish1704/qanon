import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import hackerBackground from './assets/hacker2.jpg';

// Import images for main page and top-right corner
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import symbolImg1 from './assets/symbol/img1.jpg';
import symbolImg2 from './assets/symbol/img2.jpg';
import symbolImg3 from './assets/symbol/img3.jpg';
import symbolImg4 from './assets/symbol/img4.jpg';

function App() {
  const navigate = useNavigate();

  const handleImgClick = (path) => {
    navigate(path);
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank'); // Opens the URL in a new tab
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${hackerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
      }}
    >
      {/* Main Header */}
      <h1
        className="header-title"
        style={{
          color: 'lime',
          textAlign: 'center',
          fontSize: '3rem',
          textShadow: '0 0 10px #00FF00',
        }}
      >
        We Are QAnon
      </h1>

      {/* Subheader */}
      <h2
        className="sub-header"
        style={{
          color: 'cyan',
          textAlign: 'center',
          fontSize: '2rem',
          textShadow: '0 0 10px #00FFFF',
          marginTop: '12cm',
        }}
      >
        choose wisely
      </h2>

      {/* Images as Buttons */}
      <div className="images">
        <img
          src={img1}
          alt="Image 1"
          style={{
            position: 'absolute',
            top: '13cm',
            left: '8cm',
            width: '4cm',
            height: '4cm',
            opacity: 0.7,
            cursor: 'pointer',
          }}
          onClick={() => handleImgClick('/noob')}
        />
        <img
          src={img2}
          alt="Image 2"
          style={{
            position: 'absolute',
            top: '13cm',
            right: '8cm',
            width: '4cm',
            height: '4cm',
            opacity: 0.7,
            cursor: 'pointer',
          }}
          onClick={() => handleImgClick('/page2')}
        />
      </div>

      {/* Top-right corner buttons */}
      <div className="top-right-buttons" style={{ position: 'absolute', top: '1cm', right: '1cm', display: 'flex', gap: '0.5cm' }}>
        <img
          src={symbolImg1}
          alt="DexScreener"
          style={{ width: '1.1cm', height: '1.1cm', cursor: 'pointer' }}
          onClick={() => handleExternalLink('https://dexscreener.com/')}
        />
        <img
          src={symbolImg2}
          alt="X.com"
          style={{ width: '1.1cm', height: '1.1cm', cursor: 'pointer' }}
          onClick={() => handleExternalLink('https://x.com/weaq333')}
        />
        <img
          src={symbolImg3}
          alt="Telegram"
          style={{ width: '1cm', height: '1cm', cursor: 'pointer' }}
          onClick={() => handleExternalLink('https://t.me/YourTelegramLink')}
        />
        <img
          src={symbolImg4}
          alt="Pump.Fun"
          style={{ width: '1cm', height: '1cm', cursor: 'pointer' }}
          onClick={() => handleExternalLink('https://pump.fun/')}
        />
      </div>
    </div>
  );
}

export default App;
