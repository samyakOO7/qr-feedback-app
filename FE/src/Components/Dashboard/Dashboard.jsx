// src/components/Dashboard/Dashboard.js
import React from 'react';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      <div className="dashboard-section">
        <h2>Statistics</h2>
        <div className="statistics">
          <div className="stat-item">
            <p>Total Feedbacks</p>
            <h3>120</h3>
          </div>
          <div className="stat-item">
            <p>Average Rating</p>
            <h3>4.5</h3>
          </div>
          <div className="stat-item">
            <p>Positive Feedback</p>
            <h3>80%</h3>
          </div>
        </div>
      </div>
      
      <div className="dashboard-section">
        <h2>Recent Feedback</h2>
        <ul className="feedback-list">
          <li>"Great service!" - User123</li>
          <li>"Food was delicious!" - User456</li>
          <li>"Will visit again." - User789</li>
        </ul>
      </div>
      
      <div className="dashboard-section">
        <h2>User Activity</h2>
        <ul className="activity-list">
          <li>User123 submitted feedback</li>
          <li>User456 rated 5 stars</li>
          <li>User789 commented: "Will visit again."</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
