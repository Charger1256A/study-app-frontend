import { useState } from "react";
import { Button, Typography } from '@mui/material'

import { Input } from "../Input/Input"; 

interface SignupProps {
    setMode: (mode: string) => void;
}

export const Signup: React.FC<SignupProps> = ({ setMode }) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const signup = ():void => {
        console.log(username)
        console.log(password)
        console.log(confirmPassword)
    }

    return (
        <div className="card-half container">
            <Typography variant="h4" gutterBottom sx={{ color: "white" }}>Signup</Typography>
            <Input name="username" isPassword={false} setValue={setUsername} style={{ marginBottom: "10px", width: "50%" }}/>
            <Input name="password" isPassword={true} setValue={setPassword} style={{ marginBottom: "10px", width: "50%" }} />
            <Input name="confirm password" isPassword={true} setValue={setConfirmPassword} style={{ marginBottom: "10px", width: "50%" }} />
            <Button variant="contained" sx={{ width: "50%" }} className="login-button" onClick={() => signup()}>Login</Button>
            <div className="register-container">
                <Button sx={{ color: "white" }} onClick={() => setMode("login")}>Register</Button>
            </div>
        </div>
    )
}