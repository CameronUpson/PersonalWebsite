import './App.css';

import NavBar from './components/navbar';

import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';

import Pic from "./images/me.png";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
        <div className='bg-primary-background h-screen w-screen'>
          <Router>
            <div className='p-3'>
              <img src={Pic} className='w-1/6 rounded-full mx-auto'/>
            </div>
            <div className='mb-3'>
              <NavBar />
            </div>
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/projects' element={<Projects />} />
            </Routes>
          </Router>
        </div>
  );
}

export default App;
