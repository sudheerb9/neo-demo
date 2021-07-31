import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import image1 from '../../public/images/slider/3.jpg'
import image2 from '../../public/images/slider/3.jpg'
const items = [
    {
        src: '/images/slider/3.jpg',
        altText: "Slide 1",
        caption: "",
        header: "",
        key: "1",
    },
    {
        src: '/images/slider/3.jpg',
        altText: "Slide 2",
        caption: "",
        header: "",
        key: "2",
    }
];

const Example = () => (
    <Row>
        <Col md="12" className="mx-auto">
            <UncontrolledCarousel items={items} />
        </Col>
    </Row>
);

export default Example;