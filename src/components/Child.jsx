import React from "react";

function Child({ name, email, role,gender,image}) {
  return (
    <div className="card">
        <img src={image} alt={name} className="image" />

      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Gender:</strong>{gender}</p>
    </div>
  );
}

export default Child;