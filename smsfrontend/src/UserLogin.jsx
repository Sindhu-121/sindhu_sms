import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Userlogin.css";
import Image from "./img.png";

const UserLogin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5005/Login/login", {
        login,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);
      alert("Login successful");

      fetchUserRole(token);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("Server error");
      }
    }
  };

  const fetchUserRole = async (token) => {
    try {
      const response = await axios.get("http://localhost:5005/Login/role", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userRole = response.data.role;

      switch (userRole) {
        case "admin":
          window.location.href = "/admin-dashboard";
          break;
        case "student":
          window.location.href = "/student-dashboard";
          break;
        case "teacher":
          window.location.href = "/teacher-dashboard";
          break;
        default:
          alert("Unknown user role");
          break;
      }
    } catch (error) {
      setError("Failed to fetch user role");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserRole(token);
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="logo">
        <img src={Image} alt="logo" />
      </div>
      <div className="text-center mt-4 name">Login</div>

      <form className="p-3 mt-3" onSubmit={handleSubmit}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            className="form-control"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            placeholder="Enter EmailId/PhoneNo"
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter Password"
          />
        </div>
        {error && <div className="text-danger">{error}</div>}
        <button type="submit" className="btn mt-3">
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
