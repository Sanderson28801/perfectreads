import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        padding: "1rem",
        background: "#f5f5f5",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd"
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>PerfectReads</div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/catalogue">Catalog</Link>
        <Link to="/toread">To-Read</Link>
        <Link to="/ratings">Ratings</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}
