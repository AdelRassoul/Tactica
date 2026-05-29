import "../Styles/Contact.css"

function Contact() {
  


  function handleFormSubmit(event) {
    event.preventDefault();

    const nameVal = document.getElementById('name').value;
    const emailVal = document.getElementById('email').value;
    const msgVal = document.getElementById('message').value;

    const holder = document.getElementById('submitted-messages-holder');

    if (holder) {
      const card = document.createElement('div');
      card.className = 'message-card';
      const heading = document.createElement('h3');
      heading.innerText = `From: ${nameVal} <${emailVal}>`;
      const textBlock = document.createElement('p');
      textBlock.innerText = msgVal;

      card.append(heading, textBlock);

      holder.append(card);
    }

    event.target.reset();
  }


  return (
    <main>
      <div className="contact-container">
        <h1>Contact Us</h1>
        
        <form action="" onSubmit={handleFormSubmit}>
          
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" required></textarea>

          <button type="submit">Send Message</button>

        </form>


       <div className="messages-section">
          <h2>Submitted Messages</h2>
          <p className="db-warning">No database connected. Messages will be lost on page refresh or change .</p>
       <div id="submitted-messages-holder"></div>
       </div>

      </div>
    </main>
  );
}

export default Contact;