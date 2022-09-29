import React from "react";
import { Stack } from "react-bootstrap";
import "./ProfileDetail.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ProfileDetail = () => {
  return (
    <div className="card  customCard ">
      <div className="row customRow">
        <div className="col-auto ">
          <div className="img-container">
            <img
              className="card-img "
              src="https://firebasestorage.googleapis.com/v0/b/coderhouse-ecommerce-5ee60.appspot.com/o/Perfil%2FperfilImg.jpg?alt=media&token=37f9e672-e2c5-4801-9e7d-37c3ffa0f104"
              height={250}
              width={300}
              alt=""
            />
          </div>
        </div>
        <div className="col">
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
              Actualmente me encuentro cursando "Desarrollo Backend con node.js"
              en el curso de CoderHouse, y comienzo el del React Native en
              octubre para continuar de forma paralela con los 2 cursos. Mi
              actual objetivo es seguir aprendiendo tecnologias para el
              desarrollo de software y demostrar mis capacidades en este ambito.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
