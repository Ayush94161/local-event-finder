import "./App.css";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

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

  return (
    <div className="app">

      <nav className="navbar">
        <h2>EventHub</h2>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;