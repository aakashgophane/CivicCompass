// src/pages/AccountabilityTracker.js
import React, { useEffect, useState } from "react";

const Accountability = () => {
    const [responsibilities, setResponsibilities] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/accountability") // API for responsibility tracking
            .then(response => response.json())
            .then(data => setResponsibilities(data))
            .catch(error => console.error("Error fetching accountability data:", error));
    }, []);

    return (
        <div>
            <h1>Accountability & Responsibility Tracker</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Location</th>
                        <th>Department</th>
                        <th>Contact</th>
                        <th>Portal</th>
                    </tr>
                </thead>
                <tbody>
                    {responsibilities.map((item, index) => (
                        <tr key={index}>
                            <td>{item.service}</td>
                            <td>{item.area_location}</td>
                            <td>{item.responsible_department}</td>
                            <td>{item.contact_details}</td>
                            <td><a href={item.portal_link} target="_blank" rel="noopener noreferrer">Visit</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Accountability;
