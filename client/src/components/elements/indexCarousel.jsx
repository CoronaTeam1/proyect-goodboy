import React from "react"

import { Col, Carousel, Image} from "react-bootstrap";

const indexCarousel = () => (
    <Col md={8} className="index-carousel">
        <Carousel>
            <Carousel.Item>
                <div className="container-image">
                <img  src="../../../images/index-dog1.jpeg" alt="OLA slide" />
                </div>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Item>
            <Carousel.Item>
                <div className="container-image">
                <img  src="../../../images/index-dog2.jpg" alt="Second slide" />
                </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </Carousel.Item>
            <Carousel.Item>
                    <div className="container-image">
                <img src="../../../images/index-dog3.jpg" alt="Third slide" />
                    </div>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.</p>
            </Carousel.Item>
        </Carousel>
    </Col>)

export default indexCarousel