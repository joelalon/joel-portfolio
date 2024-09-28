/* Filename: Home.jsx
   Student's Name: Joel Alon
   Student ID: 301398424
   Date: Sept. 27, 2024 */

export default function Home() {
    return (
        <>
            <h1>Welcome to Joel's Portfolio</h1>
            <p>Building the future of technology, one line of code at a time.</p>
            <p>
                My mission is to develop scalable, user-centric software solutions that not only meet today's challenges but also anticipate the needs of tomorrow. 
                I am committed to creating applications that are not just functional but also intuitive and impactful, delivering value at every step.
            </p>
            <button onClick={() => window.location.href="./about"}>Learn More About Me</button>
        </>
    )
}