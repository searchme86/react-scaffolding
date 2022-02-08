import React from "react";
import { useParams } from "react-router-dom";

const data = {
  velopert: {
    name: "velopert",
    description: "velopert",
  },
  gildong: {
    name: "gildong",
    description: "gildong gildong",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 게시물 입니다</p>
      )}
    </div>
  );
};

export default Profile;
