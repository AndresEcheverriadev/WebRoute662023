import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.js";
import AdminPage from "./Pages/AdminPage/AdminPage.js";
import BookingsPage from "./Pages/BookingsPage/BookingsPage.js";
import LoginPage from "./Pages/LoginPage/LoginPage.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
