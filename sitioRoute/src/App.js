import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginContextProvider from "./Pages/context/LoginContext.js";
import Guard from "./Pages/Guard/Guard.js";
import Loading from "./Pages/Loading/Loading.js";
import { analyticService } from "./Services/AnalyticService.js";

const HomePage = React.lazy(() => import("./Pages/HomePage/HomePage.js"));
const LoginPage = React.lazy(() => import("./Pages/LoginPage/LoginPage.js"));
const BookingsPage = React.lazy(() =>
  import("./Pages/BookingsPage/BookingsPage.js")
);

function App() {
  useEffect(() => {
    analyticService.initialize();
  }, []);

  return (
    <BrowserRouter>
      <LoginContextProvider>
        <div className="App">
          <Routes>
            <Route
              index
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="/bookings"
              element={
                <Guard>
                  <Suspense fallback={<Loading />}>
                    <BookingsPage />
                  </Suspense>
                </Guard>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<Loading />}>
                  <LoginPage />
                </Suspense>
              }
            />
            <Route
              path="/*"
              element={
                <Suspense fallback={<Loading />}>
                  <HomePage />
                </Suspense>
              }
            ></Route>
          </Routes>
        </div>
      </LoginContextProvider>
    </BrowserRouter>
  );
}

export default App;
