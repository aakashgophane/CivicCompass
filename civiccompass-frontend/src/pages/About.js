// src/pages/About.js
import React, { useEffect, useState } from "react";

const About = () => {
    const [aboutData, setAboutData] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/api/about") // API for about page data
            .then(response => response.json())
            .then(data => setAboutData(data.description))
            .catch(error => console.error("Error fetching about data:", error));
    }, []);

    return (
        <div>
            <h1>About CivicCompass</h1>
            <p>{aboutData || "Loading about information..."}</p>
        </div>
    );
};

export default About;
