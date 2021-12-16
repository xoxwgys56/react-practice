import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Profiles from "./pages/Profiles";
import HistorySample from "./pages/HistorySample";

const App: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/profile">profiles</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/profile/:username" element={<Profile />} />*/}
        {/* 아래와 같이 (/profile/*) 사용하지 않으려면, `Outlet`을 사용하면 된다.*/}
        <Route path="/profile/*" element={<Profiles />} />
        <Route path={"*"} element={<NotFound />} />
        <Route path="/history" element={<HistorySample />} />
      </Routes>
    </div>
  );
};

export default App;
