import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Placebit from './Placebit';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';


function App() {
  
  const [state,setState]=useState(0);
  const [prevstate,setprevState]=useState(0);
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/placebid" element={<Placebit state={state} setState={setState} prevstate={prevstate} setprevState={setprevState} text={false} />} />
        <Route path="/placebid1" element={<Placebit state={state}  setState={setState}  prevstate={prevstate} setprevState={setprevState}  text={true} />} />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
