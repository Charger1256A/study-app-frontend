import { useState } from "react";
import "./LoginSignup.css"
import logo from "../../assets/img/logo.png";
import { Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Login } from "../../components/Login/Login"; 
import { Signup } from "../../components/Signup/Signup"; 

interface LoginSignupProps {
    setUser: (mode: string | null) => void;
}


export const LoginSignup: React.FC<LoginSignupProps> = ({ setUser }) => {
    const [mode, setMode] = useState<string>("login")

    return (
        <div className="main container">
            <div className="login-card">
                <div className="login-card-left card-half container">
                    <TransitionGroup className="transition-container">
                        <CSSTransition
                            key={mode}
                            timeout={500}
                            classNames="fade"
                        >
                            {mode === "login" ? <Login setMode={setMode} setUser={setUser} /> : <Signup setMode={setMode} setUser={setUser} />}
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <div className="vertical-bar"></div>
                <div className="login-card-right card-half container">
                    <img src={logo} width="50%" />
                    <Typography variant="h4" sx={{ color: "white" }}>Study App</Typography>
                </div>
            </div>
        </div>
    )
}