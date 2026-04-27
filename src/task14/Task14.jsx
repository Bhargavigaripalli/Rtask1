 import { useEffect, useState } from "react";
import axios from "axios";
import "./task14.css";

const Task14 = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");
 
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data.slice(0, 8));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

   
  const handleAdd = () => {
    if (!form.name || !form.email) return;

    if (editId) {
      setUsers(
        users.map((u) =>
          u.id === editId ? { ...u, ...form } : u
        )
      );
      showToast("User Updated Successfully");
      setEditId(null);
    } else {
      const newUser = {
        id: Date.now(),
        ...form,
      };
      setUsers([newUser, ...users]);
      showToast("User Added Successfully");
    }

    setForm({ name: "", email: "" });
  };

  
  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditId(user.id);
  };
 
  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    showToast("User Deleted");
  };
 
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">CRUD Dashboard</h1>
 
      <input
        type="text"
        placeholder="Search user..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
 
      <div className="form">
        <input
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>
          {editId ? "Update" : "Add"}
        </button>
      </div>
 
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="card-container">
          {filteredUsers.map((user) => (
            <div key={user.id} className="card">

            
              <div className="avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
 
              <div className="info">
                <h3>{user.name}</h3>
                <p>{user.email}</p>

                <button
                  className="expand-btn"
                  onClick={() =>
                    setExpandedId(
                      expandedId === user.id ? null : user.id
                    )
                  }
                >
                  {expandedId === user.id
                    ? "Hide Details"
                    : "View Details"}
                </button>

                {expandedId === user.id && (
                  <div className="extra">
                    <p><strong>User ID:</strong> {user.id}</p>
                    <p><strong>Status:</strong> Active</p>
                  </div>
                )}
              </div>
 
              <div className="actions">
                <button onClick={() => handleEdit(user)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
 
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default Task14;