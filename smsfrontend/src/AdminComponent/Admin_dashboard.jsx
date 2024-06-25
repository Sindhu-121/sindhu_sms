import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import AddAdmin from "./AddAdmin";
import AddStudent from "./AddStudent";
import AddTeacher from "./AddTeacher";
import Dashboard from "./Dashboard";
import "./Admin_dashboard.css"; // Add this line to import custom CSS
import Image from "../Loginsystem/img.png";
function Admin_dashboard() {
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block sidebar shadow-lg p-3 mb-5 bg-white rounded">
          <div className="sidebar-sticky">
          <img src={Image} alt="logo" />
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-black"
                  to="dashboard"
                  activeClassName="active"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-black"
                  to="add-admin"
                  activeClassName="active"
                >
                  Add Admin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-black"
                  to="add-student"
                  activeClassName="active"
                >
                  Add Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-black"
                  to="add-teacher"
                  activeClassName="active"
                >
                  Add Teacher
                </NavLink>
              </li>
              <li className="nav-item mt-3">
                <button onClick={handleLogout} className="btn btn-danger">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" className="col-md-12 ml-sm-auto col-lg-10 px-5">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-admin" element={<AddAdmin />} />
            <Route path="add-student" element={<AddStudent />} />
            <Route path="add-teacher" element={<AddTeacher />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Admin_dashboard;
