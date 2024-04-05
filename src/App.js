import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/footer";
import Compare from "./Pages/compare";
import Bidding from "./Pages/bidding";
import Comparelist from "./Pages/comparelist";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path= '/compare' element={<Compare/>}></Route>
      <Route path='/Bidding' element={<Bidding/>}></Route>
      <Route path='/comparelist' element={<Comparelist/>}></Route>
        </Routes>
       
        <Footer />
      </Router>
    </div>
  );
}

export default App;
