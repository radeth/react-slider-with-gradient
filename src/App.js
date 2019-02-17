import React, { Component } from 'react';
import Slider from "react-slick";
import { Container, Row, Col } from 'react-grid-system';
import "../src/style.scss"
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
                  <img src="https://raw.githubusercontent.com/radeth/brainattach-v2/workingBranch/src/img/opaska1.jpg" />
                </div>
              </div>
              <div className="slide">
                <div className="algorithm">
                  <img src="https://raw.githubusercontent.com/radeth/brainattach-v2/workingBranch/src/img/28537020_10213994849819679_1350367635_n.jpg" />

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
