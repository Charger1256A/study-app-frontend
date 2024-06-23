import { Routes, Route } from "react-router-dom";

import LoginSignup from "./screens/LoginSignup/LoginSignup";
import Home from "./screens/Home/Home";


function App() {
  document.body.style.backgroundColor = "#030027";

  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
