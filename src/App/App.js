import { Col, Container, Row } from "react-bootstrap";
import Certifications from "../Components/Certifications/Certifications";
import Contact from "../Components/Contact/Contact";
import Experiences from "../Components/Experiences/Experiences";
import ProfileDetail from "../Components/ProfileDetail/ProfileDetail";
import Proyects from "../Components/Proyects/Proyects";
import Statistics from "../Components/Statistics/Statistics";
import Studies from "../Components/Studies/Studies";
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
      <Contact />
    </div>
  );
}

export default App;
