import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [page, setPage] = useState("home");
  const [selectedDate, setSelectedDate] = useState(19);

  /* ================= HERO ================= */

  const Hero = () => (
    <div className="hero">
      <h1>Discover Amazing Events</h1>
      <p>Book tickets to concerts, sports, conferences, and more</p>

      <div className="search-box">
        <input placeholder="Search events by name, location..." />
      </div>

      <div className="categories">
        {["All", "Music", "Sports", "Technology", "Arts", "Food", "Business"].map(
          (cat) => (
            <button key={cat} className="category-btn">
              {cat}
            </button>
          )
        )}
      </div>

      <div className="no-events">
        No events found. Try adjusting your filters.
      </div>
    </div>
  );

  /* ================= CALENDAR ================= */

  const Calendar = () => {
    const year = 2026;
    const month = 1; // February (0-indexed)
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const daysArray = [];

    // Empty boxes before first day
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null);
    }

    // Push real days
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    return (
      <div className="calendar-page">
        <h1 className="calendar-main-title">Event Calendar</h1>

        <div className="calendar-layout">
          {/* LEFT CALENDAR */}
          <div className="calendar-card">
            <div className="calendar-header">
              <h2>February 2026</h2>
              <div className="calendar-controls">
                <button>←</button>
                <button>Today</button>
                <button>→</button>
              </div>
            </div>

            <div className="calendar-week">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day) => (
                  <div key={day} className="week-day">
                    {day}
                  </div>
                )
              )}
            </div>

            <div className="calendar-grid">
              {daysArray.map((day, index) => (
                <div
                  key={index}
                  className={`calendar-day ${
                    selectedDate === day ? "active-day" : ""
                  }`}
                  onClick={() => day && setSelectedDate(day)}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE PANEL */}
          <div className="calendar-side-card">
            <h3>📅 February {selectedDate}, 2026</h3>
            <p>No events on this date</p>
          </div>
        </div>
      </div>
    );
  };

  /* ================= LOGIN ================= */

  const Login = () => (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p>Login to your EventScale account</p>

        <label>Email</label>
        <input type="email" placeholder="you@example.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" />

        <button className="auth-button">Login</button>

        <div className="auth-footer">
          Don't have an account?{" "}
          <span onClick={() => setPage("signup")}>Sign up</span>
        </div>
      </div>
    </div>
  );

  /* ================= SIGNUP ================= */

  const Signup = () => (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p>Join EventScale and book amazing events</p>

        <label>Full Name</label>
        <input type="text" placeholder="John Doe" />

        <label>Email</label>
        <input type="email" placeholder="you@example.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" />

        <label>Account Type</label>
        <select>
          <option>User</option>
          <option>Organizer</option>
        </select>

        <button className="auth-button">Create Account</button>

        <div className="auth-footer">
          Already have an account?{" "}
          <span onClick={() => setPage("login")}>Login</span>
        </div>
      </div>
    </div>
  );

  /* ================= RENDER ================= */

  const renderPage = () => {
    if (page === "calendar") return <Calendar />;
    if (page === "login") return <Login />;
    if (page === "signup") return <Signup />;
    return <Hero />;
  };

  return (
    <div className="home">
      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo" onClick={() => setPage("home")}>
          🏠 EventScale
        </div>

        <div className="nav-links">
          <span onClick={() => setPage("calendar")}>📅 Calendar</span>
          <span onClick={() => setPage("login")}>Login</span>
        </div>

        <button className="signup-btn" onClick={() => setPage("signup")}>
          Sign Up
        </button>
      </div>

      {renderPage()}
    </div>
  );
};

export default Home;