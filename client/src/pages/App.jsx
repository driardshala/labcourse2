import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Home from "./Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
