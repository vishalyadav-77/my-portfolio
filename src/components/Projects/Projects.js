import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quiz from "../../Assets/Projects/quiz.png";
import emotion from "../../Assets/Projects/emotion.png";
import mediclens from "../../Assets/Projects/mediclens.png";
import tk from "../../Assets/Projects/tk.png";
import nodez from "../../Assets/Projects/nodez.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mediclens}
              isBlog={false}
              title="Medic Lens"
              description="MEDIC LENS is a mobile app that allows users to scan pictures of medicines to extract their names and chemical compositions. By leveraging AI, it provides detailed information about the uses and benefits of the medicines. The app aims to help users quickly access reliable medication information by simply taking a photo, making it an efficient tool for anyone looking to learn more about pharmaceuticals."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tk}
              isBlog={false}
              title="Taaza Khabar"
              description="Taaza Khabar is a modern news app designed to provide users with the latest updates from various categories like sports, politics, and more. It fetches news articles from a news API and presents them in a RecyclerView with an intuitive UI. The app includes a search feature for finding specific news, a category filter for sorting topics, and a WebView to open full articles seamlessly. Developed using Java, Retrofit, Glide, and Android Studio, the app ensures a smooth and efficient user experience."
              ghLink="https://github.com/vishalyadav-77/TaazaKhabar.git"
              demoLink="https://www.mediafire.com/folder/g8uufqyspqcam/news+app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nodez}
              isBlog={false}
              title="Nodez (Notes App)"
              description="Nodez is a note-taking app designed for quick and organized note management. It allows users to create, edit, and delete notes with a clean and minimalistic UI. The app features Google Sign-In, enabling users to securely access and sync their notes across devices. Built using Kotlin and Android Studio, Nodez ensures a smooth user experience with fast performance and intuitive navigation."   
              ghLink="https://github.com/vishalyadav-77/nodez.git"
              demoLink="https://www.mediafire.com/folder/jeecvgym3ixdy/notes_app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quizz"
              description="Quizz is a fun and interactive quiz app that allows users to create and play custom quizzes using an array-based quiz data system. It features a score system to track performance, provides instant feedback, and includes sound effects on quiz completion for an engaging experience. With a clean and user-friendly UI, users can easily navigate through quizzes. Built using Java and Android Studio, Quizz ensures a smooth and responsive experience for all users."             
              ghLink="https://github.com/vishalyadav-77/Quizz.git"
              demoLink="https://www.mediafire.com/folder/anixvulhcpe2i/quiz_app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
