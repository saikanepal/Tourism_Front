import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/anotherRoute" element={<HomePage />} /> {/* Replace the component with the appropriate one */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
