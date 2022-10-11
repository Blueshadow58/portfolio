import React from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Modal,
  Row,
  Stack,
} from "react-bootstrap";
import { proyectsData } from "./ProyectsData";
import "./Proyects.css";
import ProyectNav from "./ProyectNav";

const Proyects = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [img, setimg] = React.useState("");

  const ZoomImg = (props) => {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="customImgModal"
      >
        <img src={img} alt="" className=" rounded img-fluid" />

        <Modal.Footer className=" container justify-content-center">
          <div className="col-md-4 text-center d-grid">
            <Button variant="dark" className="" onClick={props.onHide}>
              Cerrar
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <>
      {/* Proyect navbar */}
      <ProyectNav />

      {proyectsData.map((proyect) => {
        return (
          <Container
            key={proyect.title}
            className="card custom-card proyectSeparation"
          >
            <Row>
              <Col xs={{ order: 2 }} lg={{ span: 6, order: 1 }}>
                <Row>
                  <Col className="pe-0">
                    <img
                      role="button"
                      src={proyect.vImg}
                      alt=""
                      className="rounded img-fluid "
                      onClick={() => {
                        setimg(proyect.vImg);
                        setModalShow(true);
                      }}
                    />
                  </Col>

                  <Col>
                    {proyect.hImg.map((img) => {
                      return (
                        <Row key={img}>
                          <div key={img} className="pb-2">
                            <img
                              src={img}
                              alt=""
                              role="button"
                              className="rounded img-fluid"
                              onClick={() => {
                                setimg(img);
                                setModalShow(true);
                              }}
                            />
                          </div>
                        </Row>
                      );
                    })}
                  </Col>
                </Row>
              </Col>

              <Col xs={{ order: 1 }} lg={{ order: 2 }} className="pb-3">
                <Stack className="text-center ">
                  <div className="pb-3 ">
                    <Stack
                      className="justify-content-center"
                      direction="horizontal"
                      gap={2}
                    >
                      {proyect.hashtag.map((hashtag) => {
                        return (
                          <Badge key={hashtag} bg="primary">
                            {hashtag}
                          </Badge>
                        );
                      })}
                    </Stack>
                  </div>
                  <div className="pb-3 experiencePosition">{proyect.title}</div>
                  <div className="pb-3 ">
                    <p>{proyect.content}</p>
                  </div>

                  <Stack
                    className="justify-content-center"
                    gap={2}
                    direction="horizontal"
                  >
                    <div className="d-inline align-items-center">
                      {proyect.demo && (
                        <Button
                          variant="primary"
                          href={proyect.demo}
                          target="_blank"
                        >
                          Ver Demo
                        </Button>
                      )}
                    </div>
                    <div>
                      <Button
                        variant="outline-light"
                        href={proyect.code}
                        target="_blank"
                      >
                        Codigo
                      </Button>
                    </div>
                  </Stack>
                </Stack>
              </Col>
            </Row>
          </Container>
        );
      })}

      <ZoomImg show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Proyects;
