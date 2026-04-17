 import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./task11.css";
 
function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
 
      <div className="top-header">
        <h1>👥 User Directory</h1>
        <input
          type="text"
          placeholder=" Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
 
      <div className="card-container">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="card"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/user/${user.id}`);
            }}
          >
            <div className="card-inner">
 
              <div className="card-front">
                <img
                  src={`https://i.pravatar.cc/150?img=${user.id}`}
                  alt=""
                />
                <h3>{user.name}</h3>
              </div>

       
              <div className="card-back">
                <p><b>Email:</b> {user.email}</p>
                <p><b>Company:</b> {user.company.name}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user || !user.address || !user.company) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <div className="details-card">
        <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt="" />
        <h1>{user.name}</h1>

        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Website:</b> {user.website}</p>
        <p><b>Company:</b> {user.company.name}</p>
        <p>
          <b>Address:</b> {user.address.street}, {user.address.city} -{" "}
          {user.address.zipcode}
        </p>
      </div>
    </div>
  );
}
 
function Task11() {
  return (
    <Router basename="/Rtask1">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default Task11;