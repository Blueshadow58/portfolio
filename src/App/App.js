import { Col, Container, Row } from "react-bootstrap";
import Certifications from "../Certifications/Certifications";
import Experiences from "../Experiences/Experiences";
import ProfileDetail from "../ProfileDetail/ProfileDetail";
import Proyects from "../Proyects/Proyects";
import Statistics from "../Statistics/Statistics";
import Studies from "../Studies/Studies";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Container className="customContainer">
        {/* Profile Detail */}
        <ProfileDetail />
        {/* Statistics */}
        <Row className="">
          <Col md={4}>
            <div className="cardSeparation">
              <Statistics />
            </div>
            <div className="cardSeparation">
              <Experiences />
            </div>
            <div className="cardSeparation">
              <Certifications />
            </div>
            <div className="cardSeparation">
              <Studies />
            </div>
          </Col>
          <Col md={8} className="cardSeparation">
            <Proyects />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
