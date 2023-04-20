
/**
 * This code defines the main component of a React application, App, 
 * which is responsible for rendering the different pages of the application based on the URL path.
 */

import './App.css';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav"
import HomePage from './pages/HomePage';
import ParkPage from './pages/ParkPage';
import Parks from './pages/Parks';

//The App component returns a JSX expression that renders the different components of the application.
// The <Routes> component is used to define the different pages of the application. 
// It contains three <Route> components, each with a path prop that defines the URL path 
// for the page and an element prop that specifies the component to be rendered when that path is accessed.
//The :symbol part of the path is a parameter that will be passed to the <ParkPage /> component.
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
