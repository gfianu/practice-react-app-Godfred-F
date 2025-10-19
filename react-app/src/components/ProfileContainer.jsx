import React from "react";
import ProfileCard from "./ProfileCard";

function ProfileContainer() {
  const profiles = [
    { name: "Alex", age: 25, bio: "A software engineer who loves hiking." },
    {
      name: "Taylor",
      age: 30,
      bio: "A designer passionate about photography.",
    },
    {
      name: "Del",
      age: 37,
      bio: "A Chemistry teacher who is learning how to code.",
    },
  ];

  return (
    <div className="profile-container">
      <h1>User Profiles</h1>
      <div className="cards-wrapper">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileContainer;
