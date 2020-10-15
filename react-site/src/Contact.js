import React from 'react';
import './App.css';
 
function Contact(props) {
  return (
    <div>
      <h1>Contacter moi</h1>
        <form>
            <p>Votre nom</p>
            <input></input>
            <p>Votre email</p>
            <input></input>
            <p>Votre message</p>
            <textarea id="message" name="message"
                    rows="5" cols="33">
            </textarea><br/>
            <button>Envoyer</button>
        </form>
    </div>
  )
}
 
export default Contact;