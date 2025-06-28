import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Vishal Yadav </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            <br />
            A<span className="purple"> Java & Android Developer </span>with a passion for building efficient and intuitive mobile applications.
            <br />
            <br />
            Currently, I'm in my final year of <span className="purple">BCA</span>, refining my skills and working on exciting projects that push my creativity and problem-solving abilities.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            • Filming & Editing
            </li>
            <li className="about-activity">
            • Gym
            </li>
            <li className="about-activity">
            • Content Creation
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Coding feels like a  Superpower, taking ideas from my mind and turning them into something real, something people can use and experience!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
