import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Skills from "./routes/Skills";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";



function App() {
  return (
    <div className="App">
   
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
