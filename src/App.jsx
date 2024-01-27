import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Details from "./components/Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={Details} />
    </Routes>
  );
}

export default App;
