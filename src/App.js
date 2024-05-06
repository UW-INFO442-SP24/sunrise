import React from 'react';
import Navbar from './Components/navbar';
import Home from './pages/Home/Home';
function app () {
    return (
        <div className = "app">
            <Navbar />
            <Home />
        </div>
    );
}
export default app;