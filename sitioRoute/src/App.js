import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./Pages/Loading/Loading.js";
import { analyticService } from "./Services/AnalyticService.js";
import HomePage from "./Pages/HomePage/HomePage.js";

function App() {
  useEffect(() => {
    analyticService.initialize();
  }, []);

  return (
    <BrowserRouter>
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
            path="/*"
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
