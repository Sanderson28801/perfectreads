import React, { useState } from "react";

export default function SignUp() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div style={{ padding: "1.5rem" }}>
      <h1>Sign Up</h1>

      <div style={{ display: "flex", flexDirection: "column", width: "250px" }}>
        <input
          style={{ padding: "0.5rem", marginBottom: "0.5rem" }}
          placeholder="Create Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          style={{ padding: "0.5rem", marginBottom: "0.5rem" }}
          type="password"
          placeholder="Create Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button style={{ padding: "0.5rem" }}>Create Account</button>
      </div>
    </div>
  );
}
