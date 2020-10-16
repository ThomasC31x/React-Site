import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css';
 
function Contact(props) {
  return (
    <div>
      <h1>Contacter moi</h1>
      <Form className="form">
        <Form.Group controlId="formEmail">
            <Form.Label>Votre adresse mail</Form.Label>
            <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formName">
            <Form.Label>Votre nom</Form.Label>
            <Form.Control type="text" placeholder="Nom" />
        </Form.Group>

        <Form.Group controlId="formMessage">
            <Form.Label>Votre message</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Message" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Envoyer
        </Button>
        </Form>
    </div>
  )
}
 
export default Contact;