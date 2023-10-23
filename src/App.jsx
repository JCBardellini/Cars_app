import { useState } from "react";

import "./App.css";
import CreateCars from "./pages/CreateCars";
import Cars from "./pages/Cars";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Link to="/">Create Cars</Link>
      <Link to="/cars">Display Cars</Link>
      <Routes>
        <Route path="/" element={<CreateCars />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </>
  );
}

export default App;
