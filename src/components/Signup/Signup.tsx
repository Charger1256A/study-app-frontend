import { useState } from "react";
import { Button, Typography } from '@mui/material'

import { Input } from "../Input/Input"; 

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface SignupProps {
    setMode: (mode: string) => void;
    setUser: (mode: string | null) => void;
}

export const Signup: React.FC<SignupProps> = ({ setMode, setUser }) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const signup = async (): Promise<void> => {
        if (password !== confirmPassword) {
            alert("Passwords do not match")
        }
        var url: string = `${BACKEND_URL}/signup`;

        const response: Response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            credentials: 'include',
        })

        if (!response.ok) {
            const data = await response.json();
            const message = data.message;
            alert(message);
            return
        }
        localStorage.setItem("user", username);
        setUser(username);
    }

    return (
        <div className="card-half container">
            <Typography variant="h4" gutterBottom sx={{ color: "white" }}>Signup</Typography>
            <Input name="username" isPassword={false} setValue={setUsername} style={{ marginBottom: "10px", width: "50%" }}/>
            <Input name="password" isPassword={true} setValue={setPassword} style={{ marginBottom: "10px", width: "50%" }} />
            <Input name="confirm password" isPassword={true} setValue={setConfirmPassword} style={{ marginBottom: "10px", width: "50%" }} />
            <Button variant="contained" sx={{ width: "50%" }} className="login-button" onClick={() => signup()}>Register</Button>
            <div className="register-container">
                <Button sx={{ color: "white" }} onClick={() => setMode("login")}>Login</Button>
            </div>
        </div>
    )
}