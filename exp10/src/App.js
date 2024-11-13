import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import './App.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUsername = localStorage.getItem("username");
        if (token && storedUsername) {
            setIsAuthenticated(true);
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setIsAuthenticated(false);
        setUsername("");
    };

    return (
        <Router>
            <div>
                <nav>
                    {isAuthenticated ? (
                        <>
                            <span>Welcome, {username}</span>
                            <button onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
                        </>
                    )}
                </nav>
                <Routes>
                    <Route path="/login" element={<Login setAuth={setIsAuthenticated} setUser={setUsername} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/welcome" element={isAuthenticated ? <Welcome /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
