import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Articles from './pages/Articles';
import Booking from './pages/Booking';
import Home from './pages/Home';
import VideoLibrary from './pages/VideoLibrary';

function App() {
  return (
   <Router>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/videos' element={<VideoLibrary />} />
      <Route path='/booking' element={<Booking />} />
    </Routes>
    <Footer />
   </Router>
  );
};

export default App;
