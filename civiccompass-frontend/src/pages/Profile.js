// src/pages/Profile.js
import React, { useEffect, useState } from "react";

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/users/1") // Replace '1' with logged-in user ID
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error("Error fetching user data:", error));
    }, []);

    return (
        <div>
            <h1>User Profile</h1>
            {user ? (
                <div>
                    <h2>{user.first_name} {user.last_name}</h2>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Age:</strong> {user.age}</p>
                    <p><strong>Occupation:</strong> {user.occupation}</p>
                    <p><strong>Income:</strong> {user.income}</p>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default Profile;
