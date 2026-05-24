import "./App.css";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [favorites, setFavorites] = useState([]);

  const events = [
    {
      title: "Music Festival",
      location: "Delhi",
      date: "25 May 2026",
    },
    {
      title: "Tech Meetup",
      location: "Mumbai",
      date: "28 May 2026",
    },
    {
      title: "Food Carnival",
      location: "Bangalore",
      date: "30 May 2026",
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  const addFavorite = (event) => {
    setFavorites([...favorites, event.title]);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      
      <nav className="navbar">
        <h2>EventHub</h2>

        <button
          className="mode-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      <h1>Local Event Finder</h1>

      <input
        type="text"
        placeholder="Search events..."
        className="search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="event-container">
        {filteredEvents.map((event, index) => (
          <div className="card" key={index}>
            <h2>{event.title}</h2>
            <p>📍 {event.location}</p>
            <p>📅 {event.date}</p>

            <button
              className="fav-btn"
              onClick={() => addFavorite(event)}
            >
              ❤️ Favorite
            </button>
          </div>
        ))}
      </div>

      <h3>Favorites: {favorites.join(", ")}</h3>
    </div>
  );
}

export default App;