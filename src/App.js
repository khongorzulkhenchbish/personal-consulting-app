import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import StickyNavbar from './pages/Menu';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <Container id="appcont">
      <StickyNavbar/>
      <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/" element={<Services/>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
