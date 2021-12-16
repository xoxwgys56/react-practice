import React from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

interface MatchProps {
  username: string;
}

function About() {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  // -> `/about?detail=true`
  const detail = query.detail === "true";

  return (
    <div>
      <h1>About</h1>
      <p>Who we are and who you are</p>
      {detail && <p>additional information blah blah ...</p>}
    </div>
  );
}

export default About;
