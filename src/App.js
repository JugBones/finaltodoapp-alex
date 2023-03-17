import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Title from "./components/Title";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
//import Dashboard from "./components/Dashboard";
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
          <Route exact path="/dashboard" element ={<Title />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;