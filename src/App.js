import React, { Component } from 'react';
import Slider from "react-slick";
import { Container, Row, Col } from 'react-grid-system';
import "../src/style.scss"
import band from "./images/opaska1.jpg"
import algorithm from "./images/algo.jpg"
class App extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Container>
        <Row justify="center">
          <Col>
            <Slider className="slider" {...settings}>
              <div className="slide">
                <div className="band">
                  <img src={band} />
                </div>
                <div className="slideGradient">
                <h2>improve your gaming skill</h2>
                  <a className="myButton">some tekst</a>
                </div>

              </div>
              <div className="slide">
                <div className="algorithm">
                  <img src={algorithm} />

                </div>
                <div className="slideGradient">
                  <a className="myButton">some tekst</a>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
