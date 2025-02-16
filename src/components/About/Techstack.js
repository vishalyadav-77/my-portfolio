import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
} from "react-icons/di";
import {
  SiFirebase,
  SiKotlin,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiAdobephotoshop
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava style={{ fontSize: "100px" }} title="Java"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kotlin">
      <SiKotlin title="Kotlin"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <CgCPlusPlus title="C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython style={{ fontSize: "100px" }} title="Python"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Android">
        <DiAndroid title="Android"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql title="MySQL"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb title="MongoDB"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit style={{ fontSize: "100px" }}title="Git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase title="Firebase"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS">
        <SiCss3 title="CSS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML">
        <SiHtml5 title="HTML"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Photoshop">
        <SiAdobephotoshop title="Photoshop"/>
      </Col>
    </Row>
  );
}

export default Techstack;
