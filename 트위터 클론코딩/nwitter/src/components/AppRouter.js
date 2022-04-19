import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact={true} path={"/"} element={<Home />} />
          </>
        ) : (
          <Route path="/Auth" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
}

export default AppRouter;
