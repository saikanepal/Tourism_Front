import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';

import InnerSub from './Components/InnerSub/InnerSub';
import SubComponent from './Components//SubComponent/SubComponent.js';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />


                <Route path="/innersub" element={<InnerSub />} /> {/* Replace the component with the appropriate one */}
                <Route path='/expedition' element={<SubComponent />} />
                <Route path="/trekking" element={<SubComponent />} /> {/* Replace the component with the appropriate one */}
                <Route path="/trekking/:region" element={<InnerSub />} />
                <Route path="/expedition/:region" element={<InnerSub />} />
                {/* // Replace the component with the appropriate one */}
                {/*  */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
