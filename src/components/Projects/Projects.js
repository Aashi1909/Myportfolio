import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import KODEBASE from "../../Assets/kodeBase.webp";
import MAGIC_MATCH_GAME from "../../Assets/magicMatch.webp";
import BRAINBURST from "../../Assets/brainburstlogo.webp";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KODEBASE}
              isBlog={false}
              title="Kode Base"
              description="KODE BASE is a web-based IDE supporting multiple programming languages with seamless code execution, project management, collaboration features, and optimized performance using ReactJS,Tailwind CSS and Nodejs."
              ghLink="https://github.com/Aashi1909/MultiCode-IDE"
              demoLink="https://multicode-ide-5.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="File Management System"
              description="File Management System is a secure Django-based file management system with nested folders, sharing, JWT authentication, and bulk download support."
              ghLink="https://github.com/RitikJ22/Zigfood"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BRAINBURST}
              isBlog={false}
              title="BrainBurst App"
              description="BrainBurst App is an interactive quiz app using Next.js, TypeScript, and Tailwind CSS, optimizing API efficiency, user tracking, and engagement."
              ghLink="https://github.com/Aashi1909/Brainburst-App"
              demoLink="https://brainburst-app.netlify.app/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MAGIC_MATCH_GAME}
              isBlog={false}
              title="Magic Match Game"
              description="Magic Match Game is a memory game using React.js and Bootstrap, featuring card matching, performance analytics, match accuracy tracking, and engaging flipping mechanics to enhance cognitive skills and player retention."
              ghLink="https://github.com/Aashi1909/MAGIC_MATCH_GAME"
              demoLink= "https://flourishing-blini-9983d3.netlify.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
