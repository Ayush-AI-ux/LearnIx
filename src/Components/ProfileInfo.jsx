import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  // Redirect if no user is logged in
  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className="profile-info">
      <h1>Profile Information</h1>
      <div className="user-details">
      <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Username:</strong> {user.username}</p>
        {user.phone && <p><strong>Phone:</strong> {user.phone}</p>}
        {user.address && (
          <p><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
        )}
        {user.company && <p><strong>Company:</strong> {user.company.name}</p>}
        {user.website && (
          <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        )}
        {user.registeredDate && (
          <p><strong>Registered On:</strong> {new Date(user.registeredDate).toLocaleDateString()}</p>
        )}
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ProfileInfo;
