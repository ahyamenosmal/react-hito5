import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Footer from "./components/Footer"
import Pizza from "./pages/Pizza";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"
        element={<Home/>} />
          <Route path="/login"
        element={<Login/>} />
         <Route path="/register"
        element={<Register/>} />
        <Route path="/profile"
        element={<Profile/>} />
        <Route path="/pizza/p001"
        element={<Pizza />} />
          <Route path="/cart"
        element={<Cart/>} />
        <Route path="*"
        element={<NotFound/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
