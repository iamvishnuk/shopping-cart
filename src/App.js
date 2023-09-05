import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Componenets/Header";
import Home from "./Componenets/Home";
import Cart from "./Componenets/Cart";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
