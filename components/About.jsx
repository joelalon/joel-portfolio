/* Filename: About.jsx
   Student's Name: Joel Alon
   Student ID: 301398424
   Date: Sept. 27, 2024 */

export default function About() {
    return (
        <>
            <h1>About Me</h1>
            <img src="/src/assets/digital_photo.jpg" alt="Joel's Photo" className="about-photo"/>
            <p>Hello! My name is Joel, a passionate Software Developer with expertise in C#, JavaScript, and the MERN stack. Currently pursuing my Software Engineer Technology advance diploma at Centennial College.</p>
            <a href="/src/assets/resume.pdf" className="download-link" download>Download my Resume (PDF)</a>
        </>
    )
}
