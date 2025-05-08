import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Aashi_Frontend.pdf"; 

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* PDF Viewer */}
        <Row className="resume" style={{ justifyContent: "center", marginTop: "-20px" }}>
          <div style={{ 
            width: "60%",  
            height: "1000px",  
            borderRadius: "10px", 
           
          }}>
            <iframe 
              src={pdf} 
              width="100%" 
              height="100%" 
              style={{ border: "none", borderRadius: "10px" }}
              title="Resume PDF"
            />
          </div>
        </Row>

      
      </Container>
    </div>
  );
}

export default ResumeNew;
