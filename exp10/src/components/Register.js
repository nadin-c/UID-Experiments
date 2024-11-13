import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await axios.post("http://localhost:5000/api/users/register", { username, password });
            alert("User registered successfully!");
            setUsername("");  // Reset username
            setPassword("");  // Reset password
        } catch (err) {
            console.error("Registration error:", err);
            alert("Error registering user. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
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
                    minLength="6"  // Optional: Set minimum password length
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Registering..." : "Register"}
                </button>
            </form>
        </div>
    );
};

export default Register;
