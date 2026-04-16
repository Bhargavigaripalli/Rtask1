 import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./Task10.css";
 
const Navbar = () => (
  <nav className="navbar">
    <h2 className="logo">TutorFinder</h2>

    <div className="links">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  </nav>
);
 
const Typing = () => {
  const text = "Find the Best Tutors for You";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return <h1 className="fade-in">{display}</h1>;
};
 
const Home = () => (
  <div className="home-container fade-in">
    <Typing />

    <img
      src="https://mytutorsource.com/assets/admin/blogimages/1663837561.what%20is%20private%20tutor.jpg"
      alt="study"
      className="home-img"
    />

    <p className="home-text">
      Find expert tutors for Mathematics, Science, and Programming.
      Improve your learning with personalized guidance.
    </p>
  </div>
);
 
const About = () => (
  <div className="section fade-in">
    <h1>About</h1>
    <p>
      Tutor Finder connects students with expert tutors and helps improve
      academic performance through structured learning and guidance.
    </p>
  </div>
);
 
const Services = () => {
  const [search, setSearch] = useState("");
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [bookingDone, setBookingDone] = useState(false);

  const tutors = [
    {
      name: "Ravi",
      subject: "Math",
      rating: 4.5,
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sneha",
      subject: "Science",
      rating: 4.7,
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Kiran",
      subject: "Programming",
      rating: 4.8,
      img: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  ];

  const filtered = tutors.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="section fade-in">
      <h1>Find Your Tutor</h1>

      <input
        type="text"
        placeholder="Search tutor..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map((tutor, i) => (
          <div key={i} className="tutor-card">
            <img src={tutor.img} alt="" />
            <h3>{tutor.name}</h3>
            <p>{tutor.subject}</p>
            <p className="rating">⭐ {tutor.rating}</p>

            <button
              onClick={() => {
                setSelectedTutor(tutor.name);
                setBookingDone(false);
              }}
            >
              Book
            </button>
          </div>
        ))}
      </div>

      {selectedTutor && !bookingDone && (
        <div className="booking">
          <h3>Booking for {selectedTutor}</h3>
          <input type="date" />
          <input type="time" />
          <button onClick={() => setBookingDone(true)}>
            Confirm
          </button>
        </div>
      )}

      {bookingDone && <p className="success"> Booked Successfully</p>}
    </div>
  );
};
 
 const Contact = () => (
  <div className="section fade-in">
    <h1>Contact</h1>

    <div className="contact-card">
      <h3>Tutor Contacts</h3>

      <p><strong>Math Teacher:</strong> 9876543210</p>
      <p><strong>Science Teacher:</strong> 9123456780</p>
      <p><strong>Programming Teacher:</strong> 9012345678</p>
    </div>
  </div>
);
 
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Bhargavi",
    education: "Intermediate Student",
    id: "STU10234",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="section fade-in">
      <h1>Profile</h1>

      <div className="profile-card">
        <img
          src="https://cdnai.iconscout.com/ai-image/premium/thumb/ai-student-girl-3d-icon-png-download-jpg-13060459.png"
          alt="profile"
        />

        {isEditing ? (
          <>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
            <input
              name="education"
              value={profile.education}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <h2>{profile.name}</h2>
            <p>Education: {profile.education}</p>
          </>
        )}

        <p>Student ID: {profile.id}</p>

        {isEditing ? (
          <button
            className="save-btn"
            onClick={() => setIsEditing(false)}
          >
            Save
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            ✏️ Edit
          </button>
        )}
      </div>
    </div>
  );
};
 
const Footer = () => (
  <footer className="footer">© 2026 TutorFinder</footer>
);
 
function Task10() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default Task10;