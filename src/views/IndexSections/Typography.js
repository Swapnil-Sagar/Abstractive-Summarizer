import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Typography() {
  return (
    <div className="section section-typo">
      <img
        alt="..."
        className="path"
        src={require("assets/img/path1.png").default}
      />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path3.png").default}
      />
      <Container>
        <h3 className="title">Meet The Team</h3>

        <div className="space-50" />
        <div id="images">
          <Row>
            <Col sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Swapnil Jagtap
              </small>
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/jagtap.jpg").default}
                style={{ width: "150px" }}
              />
            </Col>
            <Col sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Monti Patel
              </small>
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src={require("assets/img/monti.jfif").default}
                style={{ width: "150px" }}
              />
            </Col>
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Swapnil Sagar
              </small>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/me.jpg").default}
                style={{ width: "150px" }}
              />
            </Col>
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Umakant Yadav
              </small>
              <img
                alt="..."
                className="img-fluid rounded-circle shadow-lg"
                src={require("assets/img/uk.jfif").default}
                style={{ width: "150px" }}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
