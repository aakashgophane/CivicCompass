// src/pages/GovernmentInfo.js
import React, { useEffect, useState } from "react";

const GovernmentInfo = () => {
    const [govInfo, setGovInfo] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/government-info") // API endpoint for government data
            .then(response => response.json())
            .then(data => setGovInfo(data))
            .catch(error => console.error("Error fetching government info:", error));
    }, []);

    return (
        <div>
            <h1>Government Information</h1>
            {govInfo ? (
                <div>
                    <h2>National Level</h2>
                    <p>{govInfo.national_info}</p>

                    <h2>State Level</h2>
                    <p>{govInfo.state_info}</p>

                    <h2>Local Level</h2>
                    <p>{govInfo.local_info}</p>

                    <h2>Key Rights</h2>
                    <p>{govInfo.key_rights}</p>
                </div>
            ) : (
                <p>Loading government info...</p>
            )}
        </div>
    );
};

export default GovernmentInfo;
