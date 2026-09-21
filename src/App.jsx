import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Students from './pages/Students.jsx';
import Courses from './pages/Courses.jsx';
import About from './pages/About.jsx';
import PortalMascot from './components/PortalMascot.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <PortalMascot />
      </div>
    </Router>
  );
}

export default App;