import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth, setUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await axios.post("http://localhost:5000/api/users/login", { username, password });

            if (res.data.success) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("username", res.data.username);
                setAuth(true);
                setUser(res.data.username);
                navigate("/welcome");
            } else {
                alert("Invalid credentials! Please check your username and password.");
            }
        } catch (err) {
            console.error("Login error:", err);
            alert("Error logging in. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default Login;