import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import NoobPage from './NoobPage'; // Importiere die Noob-Seite
import Page2 from './Page2'; // Importiere die zweite Seite

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/noob" element={<NoobPage />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
