import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>{' '}
        <Link to="/about-me" className="nav-item">About Me</Link>{' '}
        <Link to="/contact" className="nav-item">Contact</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

  );
}

export default App;
