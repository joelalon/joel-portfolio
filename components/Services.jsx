/* Filename: Services.jsx
   Student's Name: Joel Alon
   Student ID: 301398424
   Date: Sept. 27, 2024 */

// Import images from assets
import webDevelopmentIcon from "../src/assets/web-development.jpg";
import softwareDevelopmentIcon from "../src/assets/software-development.jpg";
import databaseManagementIcon from "../src/assets/database-management.png";

export default function Services() {
    return (
        <>
            <h1>Services</h1>
            <ul className="services">
                <li>
                    <img src={webDevelopmentIcon} alt="Web Development Icon" />
                    <p>Web Development (HTML/CSS, JavaScript, React)</p>
                </li>
                <li>
                    <img src={softwareDevelopmentIcon} alt="Software Development Icon" />
                    <p>Software Development (C#, Java)</p>
                </li>
                <li>
                    <img src={databaseManagementIcon} alt="Database Management Icon" />
                    <p>Database Management (SQL, MongoDB)</p>
                </li>
            </ul>
        </>
    );
}

