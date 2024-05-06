import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import HomePage from './Components/HomePage/HomePage';
function App() {

  // Keep All The Routes Here , use camelCase naming format
  let routes;
  routes = (
    <React.Fragment>
      <Route path="/" element={<HomePage />} />
      <Route path="/anotherRoute" element={<HomePage />} /> //replace route and element's component as needed
    </React.Fragment>
  );
  return (
    <div>
      <Router>
        <Routes>
          {routes}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
