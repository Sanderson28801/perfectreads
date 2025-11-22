import React from "react";

const dummyBooks = [
  {
    id: 1,
    title: "Pride and Prejudice",
    author: "Jane Austen"
  },
  {
    id: 2,
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll"
  },
  {
    id: 3,
    title: "Frankenstein",
    author: "Mary Shelley"
  }
];

export default function Catalog() {
  return (
    <div style={{ padding: "1.5rem" }}>
      <h1>Book Catalog</h1>
      <p>This is a dummy catalog page for development.</p>

      <div style={{ marginTop: "1rem" }}>
        {dummyBooks.map(book => (
          <div
            key={book.id}
            style={{
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "6px",
              marginBottom: "1rem"
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0" }}>{book.title}</h3>
            <p style={{ margin: 0, color: "#555" }}>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
