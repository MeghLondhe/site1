// App.js
import React from 'react';
import Register from './register';
import Navbar from './components/Navbar';
import './index.css'

import Registered from './Registered';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Students from './Students';

const App = () => {
  return (
    <>

<Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/registered" element={<Registered/>}/>

          <Route path="/insights" element={<div>Insights</div>} />
          <Route path="/industries" element={<div>Industries</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/client-stories" element={<div>Client Stories</div>} />
          <Route path="/careers" element={<div>Careers</div>} />
          <Route path="/about-us" element={<div>About Us</div>} />
        </Routes>
      </div>
    </Router>
      
      {/* <h1>Register</h1> */}
      
      {/* <Students/> */}
    </>
  );
};

export default App;
