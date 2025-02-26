import React from "react";
import UserInfo from "../components/UserInfo"; // Import existing component

const Profile = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-600">Citizen Information Hub</h2>
      <p className="mt-4">Find key government details, rights, and laws.</p>

      {/* Integrating the old UserInfo Component */}
      <UserInfo />
    </div>
  );
};

export default Profile;
