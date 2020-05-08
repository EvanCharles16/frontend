import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className="jumbotronFooter">
          <Container>
            <Row className="text-center">
              <Col md={4} sm={12}>
                <div className="bg-secondary mt-5" style={{ opacity: "0.5" }}>
                  <h2 className="mb-3">About</h2>
                  <p>
                    Duis nostrud culpa velit ipsum aliquip elit aliquip
                    consequat ut exercitation labore dolore pariatur elit. Duis
                    nostrud culpa velit ipsum aliquip elit aliquip consequat ut
                    exercitation labore dolore pariatur elit.
                  </p>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="mt-5">
                  <h5>About Us</h5>
                  <h5>Contact Us</h5>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="text-left mt-5">
                  <h5>
                    <b>Subscribe to our Newsletter</b>
                  </h5>
                  <h6>Get Notification for new Events or Offers</h6>
                  <Form inline className="mx-auto mt-3 mb-3">
                    <FormControl
                      type="text"
                      placeholder="Enter your email here"
                      className="formInput"
                    />
                    <Button variant="primary" className="buttonSubscribe ml-2">
                      SUBSCRIBE
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={{ span: 6, offset: 5 }} className="mt-4">
                © 2020 Brand Name
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Footer;
