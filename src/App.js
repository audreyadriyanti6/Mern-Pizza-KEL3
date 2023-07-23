import logo from './logo.svg';
import React from 'react';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import'bootstrap'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homescreen/> */}

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homescreen/>} />
      <Route path="/register" element={<Registerscreen/>}/>
      <Route path="/login" element={<Loginscreen/>}/>
      </Routes>
        {/* <Route path="/" exact component={Homescreen} /> */}
        {/* <Route path="/register" exact component={Registerscreen}/> */}
        {/* <Route path="/login" exact component={Loginscreen}/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
