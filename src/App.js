import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
// import CustomerFeedback from "./pages/CustomerFeedback.jsx";
import SignIn from "./pages/SignIn.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import "./App.css";
import { Reddit } from "@mui/icons-material";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="*" element={<Navigate to='/' replace />} />
        {/* <Redirect path="*" element={<PageNotFound/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
