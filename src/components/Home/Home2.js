import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey there! I'm a passionate frontend developer who loves turning
              ideas into interactive and visually appealing web experiences. 🚀
              <br />
              <br />
              My toolkit includes{" "}
              <i>
                <b className="purple"> JavaScript, React.js, and Next.js</b>
              </i>
              , along with styling frameworks like
              <i>
                <b className="purple">Tailwind CSS and Material-UI</b>
              </i>{" "}
              to create clean, responsive designs.
              <br />
              <br />
              But I don’t stop at the frontend—I also have experience with
              backend technologies like 
              <i>
                <b className="purple"> Node.js, Django, and MongoDB</b>
              </i>, which helps me understand the bigger picture of web development. 
              <br />
              <br />
              I’m
              always exploring new technologies and finding ways to make web
              apps faster, smoother, and more user-friendly.
            
              <br />
              <br />
             
            </p>
          </Col>

          <Col md={4} className="myAvtar d-none d-md-block">
            <Tilt>
              <img src={myImg} className="img-fluid radius" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Aashi1909"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aashiaggarwal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
