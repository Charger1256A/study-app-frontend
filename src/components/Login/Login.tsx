import { useState } from "react";
import { Button, Typography } from '@mui/material';

import { Input } from "../Input/Input"; 

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


interface LoginProps {
    setMode: (mode: string) => void;
}

export const Login: React.FC<LoginProps> = ({ setMode }) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const login = async (): Promise<void> => {
        var url: string = `${BACKEND_URL}/login`;
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

        

    }

    return (
        <div className="card-half container">
            <Typography variant="h4" gutterBottom sx={{ color: "white" }}>Login</Typography>
            <Input name="username" isPassword={false} setValue={setUsername} style={{ marginBottom: "10px", width: "50%" }} />
            <Input name="password" isPassword={true} setValue={setPassword} style={{ marginBottom: "10px", width: "50%" }} />
            <Button variant="contained" sx={{ width: "50%" }} onClick={() => login()} className="login-button">Login</Button>
            <div className="register-container">
                <Button sx={{ color: "white" }} onClick={() => setMode("signup")}>Register</Button>
            </div>
        </div>
    )
}