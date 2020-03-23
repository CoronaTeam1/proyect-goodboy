import React from "react";
import { Container, Row } from "react-bootstrap";

import Header from './components/elements/headerMain'
import Carousel from './components/elements/indexCarousel'
import Button from './components/elements/indexButton'


import "./App.css";

function App() {
  return (
    <Container>
      <Row>
      <Header />
      <Carousel /> 
      <Button />
      </Row>
    </Container>
  );
}

export default App;
