import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 text-center">Contact Us</h2>
      <Form>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Write your message here" />
        </Form.Group>

        <Row className="justify-content-center">
          <Col xs="auto">
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Contact;