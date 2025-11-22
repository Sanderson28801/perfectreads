import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import Catalog from "./pages/Catalogue";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ToRead from "./pages/ToRead";
import Ratings from "./pages/Ratings";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<Navigate to="/catalogue" />} />
      <Route path="/catalogue" element={<Catalog />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/toread" element={<ToRead />} />
      <Route path="/ratings" element={<Ratings />} />
    </Routes>
  </BrowserRouter>
);
