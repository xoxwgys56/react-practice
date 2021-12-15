import React from "react";
import { useParams, Navigate } from "react-router-dom";

type Person = {
  name: string;
  description: string;
};

/**
 * `TS`에서는 객체를 `index`로 참조하기 어려워, Map 데이터형을 사용했다.
 * */
let profileData = new Map<string, Person>();
profileData.set("velopert", {
  name: "kmj",
  description: "fe developer",
});
profileData.set("gildong", {
  name: "hgd",
  description: "hero",
});

const Profile: React.FC = () => {
  // react-router-dom v6 부터 `match`가 아닌 `useParam`을 사용한다.
  // https://stackoverflow.com/questions/70261002/pokeapi-pokemondetails-map-is-not-a-function-fixed-module-react-router-dom
  const { username } = useParams();
  const profile = profileData.get(username as string);

  if (!profile) {
    // redirect to home
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
