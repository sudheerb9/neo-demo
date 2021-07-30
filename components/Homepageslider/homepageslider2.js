import React, { useState } from 'react';

import { UncontrolledCarousel, Row, Col } from "reactstrap";

const items = [
  {
    src: require("images/slider/3.jpg"),
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: require("images/slider/3.jpg"),
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },

];

const Homepageslider = () => (
  <Row>
    <Col md="12" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
);

}

export default Homepageslider;
