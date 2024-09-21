// import './App.css'
// import Home from './components/Home'
// function App() {
  

//   return (
//     <div>
//      <Home/>
//     </div>

//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FrontCardContainer from './components/FrontCardContainer';
// import ImproveYourLife from './components/ImproveYourLife';
import ImproveYourLife from './components/ImproveYourLife';
import HealthyTeen from './components/HealthyTeen';
import Pregnancy from './components/Pregnancy';
import GenralAwareness from './components/GenralAwareness';
import MentalAwareness from './components/MentalAwareness';
import Yoga from './components/Yoga';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health-gyaan" element={<FrontCardContainer />} />
          <Route path="/Improve-Your-Lifestyle" element={<ImproveYourLife />} />  
          <Route path="/Healthy-Teen" element={<HealthyTeen/>} /> 
          <Route path="/Pregnancy" element={<Pregnancy/>} />  
          <Route path="/Genral-Awareness" element={<GenralAwareness/>} /> 
          <Route path="/Mental-Awareness" element={<MentalAwareness/>} /> 
          <Route path="/Yoga" element={<Yoga/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

