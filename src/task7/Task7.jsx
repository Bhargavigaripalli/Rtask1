 import React, { useRef, useState } from "react";
import "./task7.css";

function Task7() {
  const fileRef = useRef(null);

  const [image, setImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  );
  const [submitted, setSubmitted] = useState(false);

  const handleUploadClick = () => {
    if (!submitted) fileRef.current.click();
  };

  const handleImageChange = (e) => {
    if (submitted) return;
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className="id-card">
 
        <div className="top-bg">
          <div className="logo">Stackly</div>
          <h3>Employee ID</h3>
        </div>
 
        <div className="profile">
          <div className="image-box">
            <img src={image} alt="profile" />

            {!submitted && (
              <span className="edit-icon" onClick={handleUploadClick}>
                ✏️
              </span>
            )}
          </div>
        </div>
 
        <div className="details">
          <h2>Bhargavi Garipalli</h2>
          <p>Associate Software Engineer</p>
        </div>
 
        <input
          type="file"
          ref={fileRef}
          onChange={handleImageChange}
          hidden
        />
 
        {!submitted ? (
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button className="success-btn">
            ✓ Uploaded Successfully
          </button>
        )}

        {/* Footer */}
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Task7;