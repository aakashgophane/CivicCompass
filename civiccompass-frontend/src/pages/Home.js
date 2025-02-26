import React from "react";
import GovernmentInfo from "../components/GovernmentInfo"; // Import existing component

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-600">Government Information Center</h2>
      <p className="mt-4">Explore various government departments and their services.</p>

      {/* Integrating the old GovernmentInfo Component */}
      <GovernmentInfo />
    </div>
  );
};

export default Home;
