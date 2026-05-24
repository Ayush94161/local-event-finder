import "./App.css";

function App() {
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

  return (
    <div className="app">
      <h1>Local Event Finder</h1>

      <input
        type="text"
        placeholder="Search events..."
        className="search"
      />

      <div className="event-container">
        {events.map((event, index) => (
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