import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  //useSelector to get value from the state
  //bc we want to get the value from user(its name), then its value
  const user = useSelector((state) => state.user.value);
  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
    </div>
  );
};

export default Profile;