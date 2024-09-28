/* Filename: Projects.jsx
   Student's Name: Joel Alon
   Student ID: 301398424
   Date: Sept. 27, 2024 */

// Import images from assets
import BA_classDiagram from "../src/assets/BA_class-diagram.png";
import BA_output1 from "../src/assets/BA_output.png";
import BA_output2 from "../src/assets/BA_output2.png";

import SRS_domainClassDiagram from "../src/assets/SRS_domain-class-diagram.png";
import SRS_useCaseDiagram from "../src/assets/SRS_use-case-diagram.jpg";
import SRS_sequenceDiagram from "../src/assets/SRS_sequence-diagram.png";

import VRGMS_ERD from "../src/assets/VRGMS_ERD.png";
import VRGMS_tables from "../src/assets/VRGMS_tables.png";
import VRGMS_query from "../src/assets/VRGMS_query.png";

export default function Projects() {

    function openModal(imageSrc) {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
    
        modal.style.display = "block";
        modalImg.src = imageSrc;
    }
    
    function closeModal() {
        const modal = document.getElementById("imageModal");
        modal.style.display = "none";
    }    

    return (
        <>
            <h1>Projects</h1>

            {/* Banking Application */}
            <section>
                <h2>Banking Application</h2>
                <div className="gallery">
                    <img src={BA_classDiagram} alt="Banking Application Class Diagram" onClick={() => openModal(BA_classDiagram)} />
                    <img src={BA_output1} alt="Banking Application Output" onClick={() => openModal(BA_output1)} />
                    <img src={BA_output2} alt="Banking Application Output #2" onClick={() => openModal(BA_output2)} />
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
                    <img src={SRS_domainClassDiagram} alt="SRS Domain Class Diagram" onClick={() => openModal(SRS_domainClassDiagram)} />
                    <img src={SRS_useCaseDiagram} alt="SRS Use Case Diagram" onClick={() => openModal(SRS_useCaseDiagram)} />
                    <img src={SRS_sequenceDiagram} alt="SRS Sequence Diagram" onClick={() => openModal(SRS_sequenceDiagram)} />
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
                    <img src={VRGMS_ERD} alt="VGRMS ERD" onClick={() => openModal(VRGMS_ERD)} />
                    <img src={VRGMS_tables} alt="VRGMS Tables" onClick={() => openModal(VRGMS_tables)} />
                    <img src={VRGMS_query} alt="VGRMS Query" onClick={() => openModal(VRGMS_query)} />
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
