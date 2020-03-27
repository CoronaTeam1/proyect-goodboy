import React from "react";
import { Container, Row } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux'
import Header from './components/elements/headerMain'
import Carousel from './components/elements/indexCarousel'
import Button from './components/elements/indexButton'
import {DECREMENT_COUNTER, INCREMENT_COUNTER} from './redux/actions/actions'


import "./App.css";

function App() {
  const dispatch = useDispatch()
  return (
    <Container>
      <Row>
      <Header />
      <Carousel /> 
        <Button />
      </Row>
        <div onClick={() => dispatch(INCREMENT_COUNTER)}><h1>suma</h1></div>
      <div onClick={() => dispatch(DECREMENT_COUNTER)}><h1>resta</h1></div>
      <h1>{useSelector(state => state.count)}</h1>
    </Container>
  );
}

export default App;
