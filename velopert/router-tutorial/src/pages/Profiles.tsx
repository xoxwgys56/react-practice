import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

function NotExistProfile() {
  return <div>please select username.</div>;
}

function Profiles() {
  return (
    <div>
      <h3>user list</h3>
      <ul>
        <li>
          <Link to="/profile/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path=":username" element={<Profile />} />
        <Route path="test" element={<NotExistProfile />} />
        <Route path="/" element={<NotExistProfile />} />
      </Routes>
    </div>
  );
}

export default Profiles;
