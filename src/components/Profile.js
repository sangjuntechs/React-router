import React from "react";

const profileData = {
  sangjun: {
    name: "sangjun",
    description: "software Engineer",
  },
  kimchi: {
    name: "kimchi",
    description: "korea traditional food",
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
