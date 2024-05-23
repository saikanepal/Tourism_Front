import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";

import InnerSub from "./Components/InnerSub/InnerSub";
import SubComponent from "./Components//SubComponent/SubComponent.js";
import FinalLandingPage from "./Components/Final Landing Page/FinalLandingPage.js";
import Dashboard from "./Components/AdminPanel/Dashboard.js";
import ErrorPage from "./Components/ErrorPage/ErrorPage.js";
import Gallery from "./Components/Gallery/Gallery.js";
import Image from "./Components/AdminPanel/Image.js";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/innersub" element={<InnerSub />} />{" "}
        {/* Replace the component with the appropriate one */}
        <Route path="/expedition" element={<SubComponent />} />
        <Route path="/trekking" element={<SubComponent />} />{" "}
        {/* Replace the component with the appropriate one */}
        <Route path="/trekking/:region" element={<InnerSub />} />
        <Route path="/expedition/:region" element={<InnerSub />} />
        <Route path="/admintest" element={<Dashboard />} />
        <Route path="/trekking/:region/:place" element={<FinalLandingPage />} />
        <Route path="/expedition/:region/:place" element={<FinalLandingPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/*" element={<ErrorPage />} />
        {/* // Replace the component with the appropriate one */}
        {/*  */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
