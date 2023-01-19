import React from 'react';
import { Jumbotron, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function LandingPage() {
  return (
    <div>
      
      <Jumbotron className="text-center">
        <h1 className="display-4">Welcome to My Landing Page</h1>
        <p className="lead">Learn more about my product or service and how it can benefit you.</p>
        <hr className="my-4" />
        <a className="btn btn-primary btn-lg" href="/reactdata" role="button">Add Data!!</a>
      </Jumbotron>
      <Container>
        <Row>
          <Col md={6}>
            <h2>Feature 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a faucibus blandit, ipsum magna faucibus velit, vel congue metus metus id metus.
            </p>
          </Col>
          <Col md={6}>
            <h2>Feature 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a faucibus blandit, ipsum magna faucibus velit, vel congue metus metus id metus.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;