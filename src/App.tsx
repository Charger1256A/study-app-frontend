import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import { LoginSignup } from "./screens/LoginSignup/LoginSignup";
import { Home } from "./screens/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";


function App() {
  const [user, setUser] = useState<string | null>(localStorage.getItem('user'));

  useEffect(() => {
    console.log(user)
  }, [user]);

  document.body.style.backgroundColor = "#030027";

  return (
    <div>
      {user &&
        <Navbar setUser={setUser} />
      }
      <Routes>
        <Route path="/" element={user ? <Home /> : <LoginSignup setUser={setUser} />} />
      </Routes>
    </div>
  )
}

export default App
