import React from "react";

const dummyToRead = [
  { id: 1, title: "Moby Dick", author: "Herman Melville", reading: false },
  { id: 2, title: "Emma", author: "Jane Austen", reading: true }
];

export default function ToRead() {
  return (
    <div style={{ padding: "1.5rem" }}>
      <h1>My To-Read List</h1>

      {dummyToRead.map((b) => (
        <div
          key={b.id}
          style={{
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "6px",
            marginBottom: "1rem"
          }}
        >
          <h3 style={{ margin: 0 }}>{b.title}</h3>
          <p style={{ margin: "0 0 0.5rem 0", color: "#666" }}>{b.author}</p>

          <strong style={{ color: b.reading ? "green" : "#999" }}>
            {b.reading ? "Currently Reading" : "Not Started"}
          </strong>
        </div>
      ))}
    </div>
  );
}
