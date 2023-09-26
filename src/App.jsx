import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/shop";
import Carts from "./pages/cart/Carts";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/carts" element={<Carts />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
