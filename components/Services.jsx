/* Filename: Services.jsx
   Student's Name: Joel Alon
   Student ID: 301398424
   Date: Sept. 27, 2024 */

   export default function Services() {
    return (
        <>
            <h1>Services</h1>
            <ul className="services">
                <li>
                    <img src="src/assets/web-development.jpg" alt="Web Development Icon" />
                    <p>Web Development (HTML/CSS, JavaScript, React)</p>
                </li>
                <li>
                    <img src="src/assets/software-development.jpg" alt="Software Development Icon" />
                    <p>Software Development (C#, Java)</p>
                </li>
                <li>
                    <img src="src/assets/database-management.png" alt="Database Management Icon" />
                    <p>Database Management (SQL, MongoDB)</p>
                </li>
            </ul>
        </>
    )
}
