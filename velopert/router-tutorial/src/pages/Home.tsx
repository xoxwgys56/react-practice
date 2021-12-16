import React from "react";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is home. peace and rest.</p>
      <ol>
        {/*<li*/}
        {/*  onClick={(e) => {*/}
        {/*    console.log("click");*/}
        {/*    navigate(`/about`);*/}
        {/*  }}*/}
        {/*>*/}
        {/*  About*/}
        {/*</li>*/}
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/profile/velopert"}>velopert</Link>
        </li>
      </ol>
    </div>
  );
};

export default Home;
