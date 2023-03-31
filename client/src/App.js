import { Route, Routes, BrowserRouter } from 'react-router-dom'
// components 
import Footer from './components/Footer';
import Navigation from './components/Navigation';
// pages
import Home from './pages/Home';
import Badges from './pages/Badges';
import Gallery from './pages/Gallery';
import Games from './pages/Games';
import Helpers from './pages/Helpers'
import Login from './pages/Login'
import Hero from './components/Hero';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/games" element={<Games />} />
          <Route path="/helpers" element={<Helpers />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter></>
  );
}

export default App;
