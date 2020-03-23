import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Col md={8} className="main-header">
          <h1>Bienvenido!</h1>
          <img src="#" alt="Logo" />
        </Col>
        
      </Row>
    </Container>
  );
}

export default App;
