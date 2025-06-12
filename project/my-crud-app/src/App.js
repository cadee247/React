import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import CRUD from "./components/CRUD";
import Edit from "./components/Edit";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} /> {/* Login Page/signup */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard */}
        <Route path="/crud" element={<CRUD />} /> {/* CRUD Page */}
        <Route path="/edit/:id" element={<Edit />} /> {/* Edit Page */}
      </Routes>
    </Router>
  );
}

export default App;