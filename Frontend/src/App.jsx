import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Register from "./Components/Register.jsx";
import Product from "./Components/Product.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product" element={<Product/>}/>
    </Routes>
  );
}

export default App;