import "./App.css";
import { useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";

function App() {

  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  // GOOGLE LOGIN
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      alert("Login Successful ✅");
    } catch (error) {
      console.log(error);
    }
  };

  // LOGOUT
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  // EVENTS DATA
  const events = [
    {
      title: "Music Festival",
      location: "Delhi",
      date: "25 May 2026",
      description: "Enjoy live music and fun.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    },

    {
      title: "Tech Meetup",
      location: "Mumbai",
      date: "28 May 2026",
      description: "Networking and tech talks.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865",
    },

    {
      title: "Food Carnival",
      location: "Bangalore",
      date: "30 May 2026",
      description: "Taste delicious foods.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
  ];

  // SEARCH FILTER
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  // FAVORITE FUNCTION
  const addFavorite = (event) => {

    if (!favorites.includes(event.title)) {
      setFavorites([...favorites, event.title]);
    }

  };

  return (

    <div className={darkMode ? "app dark" : "app light"}>

      {/* NAVBAR */}
      <nav className="navbar">

        <h2>EventHub</h2>

        <div className="nav-buttons">

          {/* DARK MODE BUTTON */}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          {/* LOGIN */}
          {user ? (

            <div className="user-section">

              <span className="user-name">
                {user.displayName}
              </span>

              <button onClick={logout}>
                Logout
              </button>

            </div>

          ) : (

            <button onClick={login}>
              Login with Google
            </button>

          )}

        </div>

      </nav>

      {/* TITLE */}
      <h1>Local Event Finder</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search events..."
        className="search"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* EVENTS */}
      <div className="event-container">

        {filteredEvents.map((event, index) => (

          <div className="card" key={index}>

            <img
              src={event.image}
              alt={event.title}
              className="event-img"
            />

            <h2>{event.title}</h2>

            <p>📍 {event.location}</p>

            <p>📅 {event.date}</p>

            <button
              className="event-btn"
              onClick={() => setSelectedEvent(event)}
            >
              View Details
            </button>

            <button
              className="fav-btn"
              onClick={() => addFavorite(event)}
            >
              ❤️ Favorite
            </button>

          </div>

        ))}

      </div>

      {/* FAVORITES */}
      <div className="favorites">

        <h2>Favorites</h2>

        {favorites.length === 0 ? (
          <p>No favorites yet</p>
        ) : (
          favorites.map((fav, index) => (
            <p key={index}>❤️ {fav}</p>
          ))
        )}

      </div>

      {/* MODAL */}
      {selectedEvent && (

        <div className="modal">

          <div className="modal-content">

            <img
              src={selectedEvent.image}
              alt=""
              className="event-img"
            />

            <h2>{selectedEvent.title}</h2>

            <p>📍 {selectedEvent.location}</p>

            <p>📅 {selectedEvent.date}</p>

            <p>{selectedEvent.description}</p>

            <button onClick={() => setSelectedEvent(null)}>
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;