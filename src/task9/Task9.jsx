 import React, { createContext, useContext, useState } from "react";
import "./task9.css";
 
const FormContext = createContext();

export default function Task9() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [theme, setTheme] = useState("dark");
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage("Please fill the details");
      setShowCard(false);
    } else {
      setMessage("Submitted Successfully");
      setShowCard(true);
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <FormContext.Provider value={{ formData, handleChange }}>
      <div className={`main ${theme}`}>
    
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>

        <LoginForm handleSubmit={handleSubmit} message={message} />
 
        {showCard && <SuccessCard close={() => setShowCard(false)} />}
      </div>
    </FormContext.Provider>
  );
}
 
function LoginForm({ handleSubmit, message }) {
  return (
    <form className="login-card" onSubmit={handleSubmit}>
      <h2>Employee Login</h2>

      <Fields />
 
      {message && message !== "Submitted Successfully" && (
        <p className="error-msg">{message}</p>
      )}

      <button className="submit-btn">Submit</button>
    </form>
  );
}
 
function Fields() {
  const { formData, handleChange } = useContext(FormContext);

  return (
    <>
      <div className="input-box">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Email</label>
      </div>

      <div className="input-box">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label>Password</label>
      </div>
    </>
  );
}
 
function SuccessCard({ close }) {
  return (
    <div className="success-overlay">
      <div className="success-card">
        <h2>Submitted Successfully </h2>
        <button onClick={close}>OK</button>
      </div>
    </div>
  );
}