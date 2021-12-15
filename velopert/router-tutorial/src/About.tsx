import React from "react";
import qs from "qs";

const About = ({ location }: any) => {
  console.log(location);

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === "true";

  return (
    <div>
      <h1>About</h1>
      <p>Who we are and who you are</p>
      {detail && <p>additional information blah blah ...</p>}
    </div>
  );
};

export default About;
