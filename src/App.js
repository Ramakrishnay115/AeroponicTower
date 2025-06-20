// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./CommonComponent/Login";
import Home from "./CommonComponent/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/loginPage" element={<Login />} />        
        
      </Routes>
    </Router>
  );
}

export default App;
