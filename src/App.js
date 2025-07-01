// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./CommonComponent/Login";
import Home from "./CommonComponent/Home";
import Cart from "./CommonComponent/Cart";
import Signup from "./CommonComponent/Signup";
import Profile from"./CommonComponent/Profile";
import AeroponicTower from "./CommonComponent/AeroponicTower";
function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Signup" element={<Signup />}  />
        <Route path="/Cart" element={<Cart/>}  />  
        <Route path="/Profile" element={<Profile />} /> 
        <Route path="/Tower1" element={<AeroponicTower />} />
      </Routes>
    </Router>
  );
}

export default App;
