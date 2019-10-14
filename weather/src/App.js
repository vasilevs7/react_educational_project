import React, {Component} from 'react';
import './App.css';
//import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/darkly/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import WeatherDisplay from './WeatherDisplay.js';
import {PLACES} from './PLACES.js';

class App extends Component {
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
        <Navbar>
         <Navbar.Header>
           <Navbar.Brand>
              React Simple Weather App
            </Navbar.Brand>
           </Navbar.Header>
          </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace:index });
                }}
              >
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
}

export default App;
