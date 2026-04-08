 import React, { useState } from "react";
import "./Task5.css";

function Task5() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    gender: "",
    dob: "",
    role: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let newError = {};

    if (!formData.name.trim()) newError.name = "Name is required";

    if (!formData.email) {
      newError.email = "Email is required";
    } else if (
      !formData.email.includes("@") ||
      !formData.email.includes(".")
    ) {
      newError.email = "Invalid email format";
    }

    if (!formData.phone) {
      newError.phone = "Phone is required";
    } else if (formData.phone.length !== 10) {
      newError.phone = "Must be 10 digits";
    }

    if (!formData.password) {
      newError.password = "Password required";
    } else if (formData.password.length < 6) {
      newError.password = "Min 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      newError.confirmPassword = "Passwords do not match";
    }

    if (!formData.address) newError.address = "Required";
    if (!formData.city) newError.city = "Required";
    if (!formData.state) newError.state = "Required";
    if (!formData.country) newError.country = "Required";

    if (!formData.zip) {
      newError.zip = "Required";
    } else if (formData.zip.length !== 6) {
      newError.zip = "6 digits only";
    }

    if (!formData.gender) newError.gender = "Select gender";
    if (!formData.dob) newError.dob = "Select date";
    if (!formData.role) newError.role = "Select role";

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Employee Registered Successfully ");
      console.log(formData);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-card">

        <h2>Employee Registration</h2>

        {/* Name */}
        <div>
          <label>Name</label>
          <input className={errors.name ? "error" : ""} name="name" onChange={handleChange} />
          <span>{errors.name}</span>
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input className={errors.email ? "error" : ""} name="email" onChange={handleChange} />
          <span>{errors.email}</span>
        </div>

        {/* Phone */}
        <div>
          <label>Phone</label>
          <input className={errors.phone ? "error" : ""} name="phone" onChange={handleChange} />
          <span>{errors.phone}</span>
        </div>

        {/* DOB */}
        <div>
          <label>Date of Birth</label>
          <input type="date" className={errors.dob ? "error" : ""} name="dob" onChange={handleChange} />
          <span>{errors.dob}</span>
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <input type="password" className={errors.password ? "error" : ""} name="password" onChange={handleChange} />
          <span>{errors.password}</span>
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password</label>
          <input type="password" className={errors.confirmPassword ? "error" : ""} name="confirmPassword" onChange={handleChange} />
          <span>{errors.confirmPassword}</span>
        </div>

        {/* Gender */}
        <div className="full-width">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="gender" value="Male" onChange={handleChange}/> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" onChange={handleChange}/> Female
            </label>
          </div>
          <span>{errors.gender}</span>
        </div>

        {/* Role */}
        <div>
          <label>Role</label>
          <select className={errors.role ? "error" : ""} name="role" onChange={handleChange}>
            <option value="">Select Role</option>
            <option>Developer</option>
            <option>Tester</option>
            <option>HR</option>
          </select>
          <span>{errors.role}</span>
        </div>

        {/* City */}
        <div>
          <label>City</label>
          <input className={errors.city ? "error" : ""} name="city" onChange={handleChange} />
          <span>{errors.city}</span>
        </div>

        {/* State */}
        <div>
          <label>State</label>
          <input className={errors.state ? "error" : ""} name="state" onChange={handleChange} />
          <span>{errors.state}</span>
        </div>

        {/* Country */}
        <div>
          <label>Country</label>
          <input className={errors.country ? "error" : ""} name="country" onChange={handleChange} />
          <span>{errors.country}</span>
        </div>

        {/* Zip */}
        <div>
          <label>Zip Code</label>
          <input className={errors.zip ? "error" : ""} name="zip" onChange={handleChange} />
          <span>{errors.zip}</span>
        </div>

        {/* Address FULL WIDTH */}
        <div className="full-width">
          <label>Address</label>
          <input className={errors.address ? "error" : ""} name="address" onChange={handleChange} />
          <span>{errors.address}</span>
        </div>

        {/* Button */}
        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default Task5;