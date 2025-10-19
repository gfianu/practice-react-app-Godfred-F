import React from "react";

function ProfileCard({ name, age, bio }) {
  return (
    <div className="profile-card">
      <h2>
        <strong>Name: </strong>
        {name}
      </h2>
      <p>
        <strong>Age: </strong>
        {age}
      </p>
      <p>
        <strong>Bio: </strong>
        {bio}
      </p>
    </div>
  );
}

export default ProfileCard;
