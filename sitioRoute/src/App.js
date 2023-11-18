import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginContextProvider from "./Pages/context/LoginContext.js";
import Guard from "./Pages/Guard/Guard.js";
import Loading from "./Pages/Loading/Loading.js";

const HomePage = React.lazy(() => import("./Pages/HomePage/HomePage.js"));
const LoginPage = React.lazy(() => import("./Pages/LoginPage/LoginPage.js"));
const BookingsPage = React.lazy(() =>
  import("./Pages/BookingsPage/BookingsPage.js")
);

function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <div className="App">
          <Routes>
            <Route
              index
              path="/"
              element={
                <React.Suspense fallback={<Loading />}>
                  <HomePage />
                </React.Suspense>
              }
            />
            <Route
              path="/bookings"
              element={
                <Guard>
                  <React.Suspense fallback={<Loading />}>
                    <BookingsPage />
                  </React.Suspense>
                </Guard>
              }
            />
            <Route
              path="/login"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LoginPage />
                </React.Suspense>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </LoginContextProvider>
    </BrowserRouter>
  );
}

export default App;
