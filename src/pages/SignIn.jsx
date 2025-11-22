import React, { useState } from "react";

export default function SignIn() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div style={{ padding: "1.5rem" }}>
      <h1>Sign In</h1>

      <div style={{ display: "flex", flexDirection: "column", width: "250px" }}>
        <input
          style={{ padding: "0.5rem", marginBottom: "0.5rem" }}
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          style={{ padding: "0.5rem", marginBottom: "0.5rem" }}
          placeholder="Password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button style={{ padding: "0.5rem" }}>Sign In</button>
      </div>
    </div>
  );
}
