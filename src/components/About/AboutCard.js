import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hello, I'm <span className="purple">Aashi Aggarwal</span> from{" "}
        <span className="purple">Uttarakhand, India.</span>
        <br />
        As an experienced <span className="purple">Front-End Developer</span> with <span className="purple">1 year</span> of expertise, I specialize in crafting dynamic and responsive user interfaces.
        <br />
        <br />
        I have hands-on experience with modern technologies, including <span className="purple"> React.js, Next.js, Django, MongoDB,  </span> and <span className="purple">Node.js</span>  enabling me to develop full-stack applications with efficiency and scalability. 
        <br />
        <br />
        Passionate about <span className="purple"> problem-solving</span> and <span className="purple">optimization</span>, I thrive on tackling new challenges and continuously expanding my skill set.
        <br />
        <br />
        I am always open to new <span className="purple">challenges</span> and <span className="purple">opportunities</span> for continuous learning and growth.
        <br />
        <br />
       
      </p>
     
      <p style={{ color: "rgb(155 126 172)" }}>
      "Code with purpose, build with passion!"
      </p>
      <footer className="blockquote-footer">Aashi</footer>
    </blockquote>
  </Card.Body>
</Card>

  );
}

export default AboutCard;
