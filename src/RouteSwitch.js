import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import Shop from "./pages/Shop";
import ItemDetail from "./pages/ItemDetail";
import Cart from "./pages/Cart";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shop/:id" element={<ItemDetail/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;