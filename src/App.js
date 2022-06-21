import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(40 53 68)'
      document.title = "TextUtils Dark Mode"
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.title = "TextUtils Light Mode"


    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3 ">
          <Routes>
            <Route exact path="/about" element = {<About mode={mode}/>} />
            <Route exact path="/" element = {<TextForm heading="Enter the text to analyze" mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

