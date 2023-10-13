import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";
import Admin from "./pages/Admin.jsx";
import GuestFeedBack from "./pages/GuestFeedBack.jsx";
import AdminLogin from "./pages/AdminLogin.jsx"
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route exact path="/admin/review" element={<Admin />} />
        <Route exact path="/guest/feedback" element={<GuestFeedBack />} />
        <Route exact path="/admin/login" element={<AdminLogin />} />
        <Route path="*" element={<Navigate to='/' replace/>} />
        {/* <Redirect path="*" element={<PageNotFound/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
