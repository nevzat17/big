import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Home from './Home';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Ana sayfa */}
                    <Route path="/register" element={<Register />} /> {/* Kayıt sayfası */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
