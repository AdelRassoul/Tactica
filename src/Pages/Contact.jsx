function Contact() {
  
  return (
    <main>
      <div className="contact-container">
        <h1>Contact Us</h1>
        
        <form action="">
          
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" required></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>
    </main>
  );
}

export default Contact;