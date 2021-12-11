import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screen/login";
import Register from "./screen/register";
import DashBoard from "./screen/dashBoard";
function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
