import React from "react";

const dummyRatings = [
  { id: 1, title: "Dracula", rating: 5 },
  { id: 2, title: "The Time Machine", rating: 3 },
  { id: 3, title: "Great Expectations", rating: 4 }
];

export default function Ratings() {
  return (
    <div style={{ padding: "1.5rem" }}>
      <h1>My Ratings</h1>

      {dummyRatings.map((b) => (
        <div
          key={b.id}
          style={{
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "6px",
            marginBottom: "1rem"
          }}
        >
          <h3>{b.title}</h3>
          <p>Rating: ⭐ {b.rating}</p>
        </div>
      ))}
    </div>
  );
}
