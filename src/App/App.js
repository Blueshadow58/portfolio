import { Col, Container, Row } from "react-bootstrap";
import Experiences from "../Experiences/Experiences";
import ProfileDetail from "../ProfileDetail/ProfileDetail";
import Statistics from "../Statistics/Statistics";
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
          </Col>
          <Col md={8} style={{ backgroundColor: "green" }}>
            sdfsdfsdf
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
