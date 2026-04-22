 import React, { useState } from "react";
import useFetchUsers from "./useFetchUsers";
import "./task13.css";

const Task13 = () => {
  const { users, loading, error } = useFetchUsers();
  const [expandedId, setExpandedId] = useState(null);

  const toggleCard = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) return <h2 className="status">Loading users...</h2>;
  if (error) return <h2 className="status error">{error}</h2>;

  return (
    <div className="task13-container">
      <h1 className="title"> User Directory</h1>

      <div className="card-grid">
        {users.slice(0, 7).map((user) => {
          const isExpanded = expandedId === user.id;

          return (
            <div
              className={`user-card ${isExpanded ? "expanded" : ""}`}
              key={user.id}
              onClick={() => toggleCard(user.id)}
            > 
              <div className="avatar">
                {user.name.charAt(0)}
              </div>
 
              <div className="card-header">
                <h2>{user.name}</h2>
                <span>@{user.username}</span>
              </div>
 
              <div className="card-body">
                <p><b>Email:</b> {user.email}</p>
                <p><b>Phone:</b> {user.phone}</p>
              </div>
 
              {isExpanded && (
                <div className="extra">
                  <p><b>Website:</b> {user.website}</p>
                  <p><b>Company:</b> {user?.company?.name}</p>
                  <p><b>City:</b> {user?.address?.city}</p>
                  <p><b>Zipcode:</b> {user?.address?.zipcode}</p>
                </div>
              )}
 
              <div className="expand-text">
                {isExpanded ? "▲ Click to collapse" : "▼ Click to expand"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Task13;