import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Facebook from '../src/Components/Facebook/Facebook.jsx'
import './App.css';

function App() {
  return (
    <div>
      <Router>

<Routes>


 <Route  path="fb" exact element={<Facebook/>}/>

  {/* <Route path="/Prueba"  element={<Prueba/>} />   */}

</Routes>
</Router>
    </div>
  );
}

export default App;
