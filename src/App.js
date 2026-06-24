// Filename - App.js

import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import "./App.css";


import Home from "./Home";
import Edit from "./Edit"; 
import Create from "./Create"; 

function App() {
    return (
        <div className="App">
       
            
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                 
                    
                    <Route path="/edit" element={<Edit />} />

                     <Route path="/Create" element={<Create />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;