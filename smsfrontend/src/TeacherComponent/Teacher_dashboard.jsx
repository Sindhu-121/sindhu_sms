import React from 'react';

function Teacher_dashboard() {
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem('token');
      window.location.href = '/'; 
    }
  };

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <button onClick={handleLogout} className="btn btn-danger mt-3">
        Logout
      </button>
    </div>
  );
}

export default Teacher_dashboard;
