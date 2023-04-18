import './App.css';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav"
import HomePage from './pages/HomePage';
import ParkPage from './pages/ParkPage';
import Parks from './pages/Parks';

function App() {
  
  return (
    
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/parks' element={<Parks />} />
        <Route path='/parkCode/:symbol' element={<ParkPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
