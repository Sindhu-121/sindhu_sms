import React from 'react';

function Student_dashboard() {
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem('token');
      window.location.href = '/'; 
    }
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      <button onClick={handleLogout} className="btn btn-danger mt-3">
        Logout
      </button>
    </div>
  );
}

export default Student_dashboard;
