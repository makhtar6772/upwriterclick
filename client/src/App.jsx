import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import PaymentMethod from "./components/modules/PaymentMethod";
import CreditCard from "./components/modules/CreditCard ";
import Signup from "./components/modules/Signup";
import Login from "./components/modules/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track authentication status

  // Function to handle user login
  const handleLogin = async (userData) => {
    try {
      // Make a POST request to your backend for login
      const response = await axios.post(
        "http://localhost:8000/api/login",
        userData
      );
      console.log(response);
      // Check if login was successful
      if (response.status === 200) {
        // Update isLoggedIn state based on successful login
        setIsLoggedIn(true);
        // Optionally, you can perform additional actions after successful login, such as redirecting the user to another page
      } else {
        // If login was unsuccessful, log the error
        console.error("Login failed:", response.data.message);
        // Optionally, you can show an error message to the user
      }
    } catch (error) {
      // If an error occurs during login, log the error
      console.error("Error occurred during login:", error);
      // Optionally, you can show an error message to the user
    }
  };

  // Function to handle user logout
  const handleLogout = () => {
    // Perform logout logic here (e.g., clear session, remove token)
    setIsLoggedIn(false); // Update isLoggedIn state to false
  };

  return (
    <div className="h-screen">
      <Router>
        <Routes>
          {/* <Route
            path="/login"
            element={<LoginSignup onLogin={handleLogin} />}
          /> */}
          <Route path="/plan" element={<PaymentMethod />} />
          <Route path="/credits" element={<CreditCard />} />
          <Route
            path="/dashboard"
            element={<Dashboard onLogout={handleLogout} />}
          />
          <Route
            path="/"
            element={
              isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Home />
            }
          />

          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
