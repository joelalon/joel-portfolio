/* Filename: Projects.jsx
   Student's Name: Joel Alon
   Student ID: 301398424
   Date: Sept. 27, 2024 */

export default function Projects() {

    function openModal(imageSrc) {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
    
        modal.style.display = "block"; // Show the modal
        modalImg.src = imageSrc; // Set the image source
    }
    
    function closeModal() {
        const modal = document.getElementById("imageModal");
        modal.style.display = "none"; // Hide the modal when clicked
    }    


    return (
        <>
            <h1>Projects</h1>

            {/* Banking Application */}
            <section>
                <h2>Banking Application</h2>
                <div className="gallery">
                    <img src="src/assets/BA_class-diagram.png" alt="Banking Application Class Diagram" onClick={() => openModal('src/assets/BA_class-diagram.png')} />
                    <img src="src/assets/BA_output.png" alt="Banking Application Output" onClick={() => openModal('src/assets/BA_output.png')} />
                    <img src="src/assets/BA_output2.png" alt="Banking Application Output #2" onClick={() => openModal('src/assets/BA_output2.png')} />
                </div>
                <p>
                    Collaborated with a team to develop a comprehensive banking application using C# in Visual Studio Code. 
                    Implemented core functionalities such as account management and transaction handling. 
                    Utilized object-oriented programming principles such as inheritance, interfaces, and abstract classes 
                    to enhance modularity, code reusability, and maintainability.
                </p>
            </section>

            {/* Software Requirements Specification (SRS) Document */}
            <section>
                <h2>Software Requirements Specification (SRS) Document</h2>
                <div className="gallery">
                    <img src="src/assets/SRS_domain-class-diagram.png" alt="SRS Domain Class Diagram" onClick={() => openModal('src/assets/SRS_domain-class-diagram.png')} />
                    <img src="src/assets/SRS_use-case-diagram.jpg" alt="SRS Use Case Diagram" onClick={() => openModal('src/assets/SRS_use-case-diagram.jpg')} />
                    <img src="src/assets/SRS_sequence-diagram.png" alt="SRS Sequence Diagram" onClick={() => openModal('src/assets/SRS_sequence-diagram.png')} />
                </div>
                <p>
                    Worked in an Agile team to create an SRS document for a web application named Quick Recipe Generator. 
                    The app assists users in meal planning by generating recipes based on the available ingredients. 
                    Contributed to UML diagrams, use case modeling, and writing functional and non-functional requirements. 
                    Organized development using JIRA for timeline management and task distribution.
                </p>
            </section>

            {/* Video Game Retailer Management System (VGRMS) */}
            <section>
                <h2>Video Game Retailer Management System (VGRMS)</h2>
                <div className="gallery">
                    <img src="src/assets/VRGMS_ERD.png" alt="VGRMS ERD" onClick={() => openModal('src/assets/VRGMS_ERD.png')} />
                    <img src="src/assets/VRGMS_tables.png" alt="VRGMS Tables" onClick={() => openModal('src/assets/VRGMS_tables.png')} />
                    <img src="src/assets/VRGMS_query.png" alt="VGRMS Query" onClick={() => openModal('src/assets/VRGMS_query.png')} />
                </div>
                <p>
                    Co-developed a comprehensive database system to streamline operations for a video game retailer, addressing key market needs. 
                    Conducted market research to inform data requirements, focusing on trends in the video game industry and emerging technologies like VR and AR. 
                    Designed an Entity Relationship Diagram (ERD) for key entities including Games, Genres, Platforms, Suppliers, Inventory, and Customers. 
                    Led the Logical and Physical Database Design phases, using Oracle SQLDeveloper to create normalized tables, define constraints, 
                    populate the database, and execute complex queries, ensuring efficient inventory control and system functionality.
                </p>
            </section>

            {/* Modal for Pop-up */}
            <div id="imageModal" className="modal" onClick={closeModal}>
                <span className="close">&times;</span>
                <img className="modal-content" id="modalImage" />
            </div>
        </>
    );
}
