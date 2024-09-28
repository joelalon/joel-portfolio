/* Filename: Contact.jsx
   Student's Name: Joel Alon
   Student ID: 301398424
   Date: Sept. 27, 2024 */

   export default function Contacts(){
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form handling logic here
        alert("Thank you! We'll be in touch soon.");
        window.location.href = "/";
    }

    return (
        <>
            <h1>Contact Me</h1>

            {/* Contact Information Panel */}
            <section className="contact-info">
                <h2>My Contact Information</h2>
                <p>Email: jalongon@my.centennialcollege.ca</p>
                <p>Phone: (437) 663-2640</p>
                <p>Location: Toronto, ON, Canada</p>
            </section>

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
                <label>First Name: <input type="text" name="firstName" required /></label><br/><br/>
                <label>Last Name: <input type="text" name="lastName" required /></label><br/><br/>
                <label>Contact Number: <input type="text" name="contactNumber" /></label><br/><br/>
                <label>Email Address: <input type="email" name="email" required /></label><br/><br/>
                <label>Message: <textarea name="message" required /></label><br/><br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
