import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginContextProvider from "./Pages/context/LoginContext.js";
import Guard from "./Pages/Guard/Guard.js";
import HomePage from "./Pages/HomePage/HomePage.js";
import AdminPage from "./Pages/AdminPage/AdminPage.js";
import BookingsPage from "./Pages/BookingsPage/BookingsPage.js";
import LoginPage from "./Pages/LoginPage/LoginPage.js";
import { LoginContext } from "./Pages/context/LoginContext.js";
import "./App.css";

function App() {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route
              path="/bookings"
              element={
                <Guard>
                  <BookingsPage />
                </Guard>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </LoginContextProvider>
    </BrowserRouter>
  );
}

export default App;
