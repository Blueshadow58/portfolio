import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import "./ProfileDetail.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ProfileDetail = () => {
  return (
    <div className="card  customCard ">
      <Row className="customRow">
        <Col className="col-auto mx-auto">
          <div className="img-container">
            <img
              className="card-img  mx-auto d-block"
              src="https://firebasestorage.googleapis.com/v0/b/coderhouse-ecommerce-5ee60.appspot.com/o/Perfil%2FperfilImg.jpg?alt=media&token=37f9e672-e2c5-4801-9e7d-37c3ffa0f104"
              height={250}
              width={300}
              alt=""
            />
          </div>
        </Col>
        <Col>
          <div className="card-block px-3 card-detail">
            <Stack className="pb-2" direction="horizontal" gap={2}>
              <div>
                <span className="card-title profile-name h4">
                  Franco Gamonal
                </span>
              </div>
              <div className="ms-auto">
                <FaEnvelope />
              </div>
              <div>
                <p className="card-text text-break ">gamonalfranco@gmail.com</p>
              </div>
            </Stack>
            <Stack className="pb-2" direction="horizontal" gap={2}>
              <div>
                <p className="card-text card-subtitle ">
                  Desarrollador de software
                </p>
              </div>
              <div className="ms-auto">
                <FaPhoneAlt />
              </div>
              <div>
                <p className=" card-text text-break ">(+56 9) 97170963</p>
              </div>
            </Stack>

            <p className="card-text pt-1 ">
              Ingeniero informático, estudiando para desempeñarme el desarrollo
              de software como desarrollador Front/Back o FullStack.
            </p>
            <p className="card-text pt-1">
              Soy un desarrollador Junior con experiencia en React.js y PHP, con
              un gran interés en el desarrollo de aplicaciones móviles
              utilizando React Native y Flutter.
              <br /> Cuento con habilidades en React.js, JavaScript, HTML, CSS,
              SQL, NoSQL y también tengo experiencia en el desarrollo de
              aplicaciones de lado del servidor utilizando PHP y Node.js. Estoy
              buscando una oportunidad para desempeñarme en el desarrollo de
              aplicaciones móviles y mejorar mis habilidades en React Native y
              Flutter. Me gusta trabajar en equipo y estoy constantemente
              buscando nuevas formas de mejorar mis habilidades.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileDetail;
