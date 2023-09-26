import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/shop";
import Carts from "./pages/cart/Carts";
import HomePage from "./pages/HomePage";

import { ShopContextProvider } from "./context/ShopContext";
function App() {
  return (
    <>
      <div className="App">
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/Home" element={<HomePage />} />
              <Route path="/carts" element={<Carts />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;
