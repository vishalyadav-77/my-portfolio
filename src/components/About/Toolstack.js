import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiAndroidstudio,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Android Studio">
        <SiAndroidstudio title="Android Studio"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio">
        <SiVisualstudiocode title="Visual Studio"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons"title="Postman">
        <SiPostman title="Postman"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel title="Vercel"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
