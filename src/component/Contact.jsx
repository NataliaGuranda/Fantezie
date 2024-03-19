import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contactează-ne!</h2>
      <p>Ne-ar plăcea să auzim de la tine!</p>
      <form className="contact-form">
        <input type="text" placeholder="Numele tău" required />
        <input type="email" placeholder="Email-ul tău" required />
        <textarea placeholder="Mesajul tău"></textarea>
        <button type="submit">Trimite Mesajul</button>
      </form>
    </div>
  );
}

export default Contact;
