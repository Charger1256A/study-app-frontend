import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material"
import logo from "../../assets/img/logo.png";
import "./Navbar.css"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface NavbarProps {
    setUser: (mode: string | null) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ setUser }) => {
    const USER = localStorage.getItem("user");

    const logout = async (): Promise<void> => {
        var url: string = `${BACKEND_URL}/logout`;
        const response: Response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })

        if (!response.ok) {
            const data = await response.json();
            const message = data.message;
            alert(message);
            return
        }

        localStorage.removeItem("user")
        setUser(null);
    }

    return (
        <Box sx={{ flexGrow: 1, position: 'absolute', top: '0px', left: '0px', width: '100%' }}>
            <AppBar position="static" sx={{ backgroundColor: "#151E3F" }}>
                <Toolbar>
                <img src={logo} width="2%" />  
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    STUDY APP
                </Typography>
                <div className="nav-container">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {USER}
                    </Typography>
                    <Button color="inherit" onClick={() => logout()}>Logout</Button>
                </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}