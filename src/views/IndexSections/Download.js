import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
//import Paper from "../../assets/files";

export default function Download() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img
        alt="..."
        className="path"
        src={require("assets/img/path1.png").default}
      />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              Do you love this project? We have something for you.
            </h2>
            <h4 className="description">
              We have nothing to hide. Here is a published paper you can
              download to look deep into our deep web project to learn how it
              user AI / ML algorithms to shorten your big paragraphs and give
              you only information that you need. Click below to download.
            </h4>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <Button
              className="btn-round"
              color="info"
              href="https://drive.google.com/file/d/1LyUx9PIMTbDWAZzo8cHxh3q7GId7y4T0/view?usp=sharing"
              target="_blank"
              role="button"
              size="lg"
            >
              Download Paper
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row className="row-grid align-items-center my-md">
          <Col lg="6">
            <h3 className="text-info font-weight-light mb-2">
              Thank you for supporting us!
            </h3>
            <h4 className="mb-0 font-weight-light">
              Let's get in touch on any of these platforms.
            </h4>
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            <Button
              className="btn-icon btn-round"
              color="twitter"
              id="twitter"
              size="lg"
            >
              <i className="fab fa-twitter" />
            </Button>
            <UncontrolledTooltip delay={0} target="twitter">
              Tweet!
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="facebook"
              id="facebook"
              size="lg"
            >
              <i className="fab fa-facebook-square" />
            </Button>
            <UncontrolledTooltip delay={0} target="facebook">
              Share!
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="github"
              href="https://github.com/swapnil-sagar"
              id="tooltip877922017"
              size="lg"
              target="_blank"
            >
              <i className="fab fa-github" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip877922017">
              Star on Github
            </UncontrolledTooltip>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
